var prev_infoWindow;
Ext.define('RaxaEmr.view.LocationGoogleMap', {
    extend : 'Ext.Map',
    xtype: 'locationGoogleMap',
    id: 'locationGoogleMapId',
    config: {
        layout: 'card',
        useCurrentLocation : {
            autoUpdate : false
        },
        listeners: {
            maprender : function(comp, map) {
                var addres = '';
                var locAddress = '';
                var zoom = 8;
                var geocoder = new google.maps.Geocoder();
                var latlng   = new google.maps.LatLng(this._geo.getLatitude(), this._geo.getLongitude());
                if(Ext.getCmp('country').getValue() !== "" && Ext.getCmp('address').getValue() !== "" && Ext.getCmp('state').getValue() !== "" && Ext.getCmp('city').getValue()!== "") {
                    addres =  Ext.getCmp('address').getValue() + " ,"+Ext.getCmp('city').getValue()+" ,"+ Ext.getCmp('state').getValue() + " ," + Ext.getCmp('country').getValue() ;
                }  
                if(addres !== '') {
                    geocoder.geocode({
                        'address': addres
                    }, function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                Ext.getCmp('locationGoogleMapId').config.setMapMarker(results[0].geometry.location,map,results[0].formatted_address,geocoder,addres);
                            } else {
                                console.info("No results found");
                            }
                        } else {
                            console.info("Geocoder failed due to: " + status);
                        }
                    });      
                }
                else {
                    navigator.geolocation.getCurrentPosition(function(position){ 
                        if(latlng.hb === 0 && latlng.ib === 0 ) {
                            latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        }
                        geocoder.geocode({
                            'latLng': latlng
                        }, function(results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[0]) {
                                    var addressArray = results[0].formatted_address.split(", ");
                                    Ext.getCmp('country').setPlaceHolder(addressArray[addressArray.length-1]);
                                    Ext.getCmp('state').setPlaceHolder(addressArray[addressArray.length-2]);
                                    Ext.getCmp('city').setPlaceHolder(addressArray[addressArray.length-3]);
                                    for(var i = 0; i<[addressArray.length-3]; i++) {
                                        if(locAddress === '') {
                                            locAddress = addressArray[i]; 
                                        } else {
                                            locAddress = locAddress + ", " + addressArray[i];
                                        }
                                    }
                                    Ext.getCmp('address').setPlaceHolder(locAddress);
                                    Ext.getCmp('locationGoogleMapId').config.setMapMarker(latlng,map,results[0].formatted_address,geocoder);
                                } else {
                                    console.info("No results found");
                                }
                            } else {
                                console.info("Geocoder failed due to: " + status);
                            }
                        })
                    });
                } 
            }
        },
        
        setMapMarker : function(latLang , map , address , geocoder , addedAddress) {
            Ext.getCmp('latitude').setValue(latLang.Ya);
            Ext.getCmp('longitude').setValue(latLang.Za);
            map.setCenter(latLang);
            var marker = new google.maps.Marker({
                position: latLang,
                map: map,
                data: address,
                title: address,
                draggable: true
            });
            Ext.getCmp('locationGoogleMapId').config.addInfoWindow(address,marker,map,addedAddress);
            google.maps.event.addListener(marker, 'dragend', function(event) {
                Ext.getCmp('locationGoogleMapId').config.placeMarker(geocoder , marker , event.latLng , map);
            }); 
        },
        
        addInfoWindow : function(locationAddress,marker,map,addedAddress) {
            var actualAdd;
            var locAddress;
            if(Ext.getCmp('country').getValue() !== "" && Ext.getCmp('address').getValue() !== "" && Ext.getCmp('state').getValue() !== "" && Ext.getCmp('city').getValue()!== "") {
                actualAdd =  Ext.getCmp('address').getValue() + " ,"+Ext.getCmp('city').getValue()+" ,"+ Ext.getCmp('state').getValue() + " ," + Ext.getCmp('country').getValue() ;
            } 
            if(actualAdd !== undefined) {
                locAddress = actualAdd;
            } else{
                locAddress = locationAddress;
            }
                if (prev_infoWindow) {
                    prev_infoWindow.close();
                };
            var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+Ext.getCmp('firstName').getValue()+" "+Ext.getCmp('lastName').getValue()+'</h1>'+
            '<div id="bodyContent">'+
            '<p><b>'+Ext.getCmp('nameOfSetup').getValue()+'</b></p>'+
            '<p><b>'+locAddress+'</b></p>'
            '</div>'+
            '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });
            infowindow.open(map,marker);
            prev_infoWindow = infowindow;
        },
        
        placeMarker : function(geocoder ,marker , location , map) {
            var geocoderr = new google.maps.Geocoder();
            geocoder.geocode({
                'latLng': location
            }, 
            function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        if ( marker ) {
                            marker.setPosition(location);
                            marker.setTitle(results[0].formatted_address);
                            Ext.getCmp('locationGoogleMapId').config.addInfoWindow(results[0].formatted_address,marker,map);
                        } else {
                            marker = new google.maps.Marker({
                                position: location,
                                map: map,
                                title: results[0].formatted_address
                            });
                            Ext.getCmp('locationGoogleMapId').config.addInfoWindow(results[0].formatted_address,marker,map);
                        }
                        Ext.getCmp('latitude').setValue(location.Ya);
                        Ext.getCmp('longitude').setValue(location.Za);
                    } else {
                        console.info("No results found");
                    }
                } else {
                    console.info("Geocoder failed due to: " + status);
                }
            }
            );
        }
    }
});