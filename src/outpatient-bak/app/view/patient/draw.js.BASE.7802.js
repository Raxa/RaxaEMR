///////////////////////////////////////////////////////////
// Connection: Kinetic to Sencha
//  - bridges via firing Ext events
///////////////////////////////////////////////////////////

// Allows us to throw Ext events, triggering Sencha code when tapping on Kinetic items
var SAVE_LOAD_MASK_MAX_WAIT_TIME = 2000;
Ext.define('KineticToSencha', {
  mixins: ['Ext.mixin.Observable'],
  id: 'k2s',
  config: {
    fullName: ''
  },
  constructor: function(config) {
    this.initConfig(config); // We need to initialize the config options when the class is instantiated
  },
  addMedication: function() {
    this.fireEvent('clickAddMedication');
  },
  
  clickDiagnosis: function() {
    this.fireEvent('clickOnDiagnosis');
  },
  saveLoadMask: function() {
    var mask = function() {
        console.log('mask off');
        Ext.getCmp('opdPatientDataEntry').setMasked(false)
      }

    console.log('mask on');
    Ext.getCmp('opdPatientDataEntry').setMasked({
      xtype: 'loadmask',
      message: 'Saving...',
      modal: true
    });

    setTimeout(mask, SAVE_LOAD_MASK_MAX_WAIT_TIME);
  }
});

// TODO: take these out of global scope
var g_diagnosis_text = "";
var g_diagnosis_list = "";
var order;
var obs;
var DoctorOrderStore;
var DoctorOrderModel;
var DiagnosisPrinted = 0;
var k2s = Ext.create('KineticToSencha', {

  addOrder: function() {
    //set persist of order true as Doctor may not always have a order
    RaxaEmr.Outpatient.model.DoctorOrder.getFields().items[6].persist = true; //6th field in orders (sorted)
    // RaxaEmr.Outpatient.model.DoctorOrder.getFields().get('orders').setPersist(true); //6th field in orders (sorted)
    var drugPanel = Ext.getStore('drugpanel');

    lengthOfDrugOrder = Ext.getStore('drugpanel').getData().all.length;

    for(var i = 0; i < lengthOfDrugOrder; i++) {
      var drugPanel = Ext.getStore('drugpanel').getData().all[i].data;

      //Drug Orders here
      var OrderModel = Ext.create('RaxaEmr.Pharmacy.model.drugOrder', {
        patient: myRecord.data.uuid,
        //need to set selected patient uuid in localStorage
        drug: drugPanel.uuid,
        startDate: Util.Datetime(new Date(), Util.getUTCGMTdiff()),
        autoExpireDate: Util.Datetime(new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + drugPanel.duration), Util.getUTCGMTdiff()),
        concept: '---',
        //   drugPanel.data.uuid, uuid is not currently stored, need to work on how Drug order is added to store
        dose: drugPanel.frequency,
        quantity: drugPanel.routeofadministration
        //      type: 
        //      instruction:
      });
      DoctorOrderModel.data.obs.push(OrderModel.data);
    }
  },

  addObs: function() {
    //TODO set persit TRUE if first order 
    // RaxaEmr.Outpatient.model.DoctorOrder.getFields().items[5].persist= true; //5th field in obs (sorted)
    //TODO set persist FALSE if no item in list
    DoctorOrderModel.data.obs = [];

    lengthOfDiagnosis = Ext.getCmp('diagnosedList').getStore().data.length;

<<<<<<< Temporary merge branch 1
    for(var i = 0; i < lengthOfDiagnosis; i++) {
      console.log(Ext.getCmp('diagnosedList').getStore().data.all[i]);

      var ObsModel = Ext.create('RaxaEmr.Outpatient.model.Observation', {
        obsDatetime: Util.Datetime(new Date(), Util.getUTCGMTdiff()),
        person: myRecord.data.uuid,
        //need to set selected patient uuid in localStuiorage
        concept: Ext.getCmp('diagnosedList').getStore().data.all[i].data.id,
      });
      DoctorOrderModel.data.obs.push(ObsModel.data);
    }

    console.log(DoctorOrderModel);
=======

    for(var i = 0 ; i < lengthOfDiagnosis ; i++)
    {
      console.log(Ext.getCmp('diagnosedList').getStore().data.all[i].data);
      var ObsModel = Ext.create('RaxaEmr.Outpatient.model.DoctorOrderObservation', {
			obsDatetime: Util.Datetime(new Date(), Util.getUTCGMTdiff()),
			person: myRecord.data.uuid,  //need to set selected patient uuid in localStuiorage
			concept: Ext.getCmp('diagnosedList').getStore().data.all[i].data.id,
//			value: Ext.getCmp('diagnosedList').getStore().data.all[i].data.complain
		    });
      DoctorOrderModel.data.obs.push(ObsModel.raw);  
      console.log(ObsModel);
    }      

  console.log(DoctorOrderModel);
    
>>>>>>> Temporary merge branch 2

  },

  addDoctorRecordImage: function() {

    // TODO UNABLE TO access ControlsLayer here
    // children till 7 are already there and rest goes into 
    // console.log(controlsLayer.children[8].attrs.image.src)
    // DoctorOrderModel.data.obs = [];
    //    (document.getElementById('id-of-doctor-form').src)
    //TODO check all objects of canvas which are saved and then push it as obs 
    // OR store an array of image which can be sent
    //set Image in obs json
    console.log('checking patient records in stage and copying to DoctorOrder store');
<<<<<<< Temporary merge branch 1

    for(var i = 0; i < stage.getChildren().length; i++) {
      for(var j = 0; j < stage.getChildren()[i].children.length; j++) //j is always 4, but not now.
      {
        if(stage.getChildren()[i].children[j].attrs.id == "PatientRecord") {
          console.log(stage.getChildren()[i].children[j].attrs.image);

          var ObsModel = Ext.create('RaxaEmr.Outpatient.model.Observation', {
            obsDatetime: Util.Datetime(new Date(), Util.getUTCGMTdiff()),
            person: myRecord.data.uuid,
            //need to set selected patient uuid in localStorage
            concept: localStorage.patientRecordImageUuidconcept,
            value: stage.getChildren()[i].children[j].attrs.image.src
          });
          DoctorOrderModel.data.obs.push(ObsModel.data);
        }
      }
    }
=======
  
    var PatientRecordHistory = Ext.getStore('visitHistoryStore').getData();

      for(var j = 0; j < Ext.getStore('visitHistoryStore').getData().all.length; j++) //j is always 4, but not now.
      {
	if(PatientRecordHistory.all[j].data.id=="PatientRecord")
	{
//	  if( PatientRecordHistory.all[j].imgSrc.length < 65000){   
	 
	     var ObsModel = Ext.create('RaxaEmr.Outpatient.model.DoctorOrderObservation', {
			obsDatetime: Util.Datetime(new Date(), Util.getUTCGMTdiff()),
			person:  myRecord.data.uuid,  //need to set selected patient uuid in localStorage
			concept: localStorage.patientRecordImageUuidconcept, 
			value: PatientRecordHistory.all[j].data.imgSrc
		    });	    
	    DoctorOrderModel.data.obs.push(ObsModel.raw);  
//	}
//		else {
//	  Ext.Msg.alert('Error','Can\'t save data on server');
//		}
	}

     }  

>>>>>>> Temporary merge branch 2
    console.log(Ext.getStore('DoctorOrder'));

  },

  // <Comment describing>
  sendDoctorOrderEncounter: function() {
<<<<<<< Temporary merge branch 1
    // this.addDoctorRecordImage();
    //sync store after addObs , addDoctorRecordImage and addOrder
    console.log(Ext.getStore('DoctorOrder'));
=======
//<<<<<<< HEAD
    
    this.addObs();    
    this.addDoctorRecordImage();
    //this.addOrder();  //Sending DoctorOrder is not working not
    
  //  DoctorOrderModel.data.orders = [];
    console.log(DoctorOrderStore);

    DoctorOrderModel.data.patient = myRecord.data.uuid;
    
    console.log(Ext.getStore('DoctorOrder'));
    
        DoctorOrderStore.add(DoctorOrderModel);
	console.log(DoctorOrderStore);
	
        //makes the post call for creating the patient
        DoctorOrderStore.sync({
            success: function(response, records) {
	      console.log(arguments);
	      
	    },
            failure: function(response, records) {
	      console.log(arguments);
	      
	    }
        });
    
    
>>>>>>> Temporary merge branch 2
  },

  // <Comment describing>
  initStore: function() {
<<<<<<< Temporary merge branch 1
    DoctorOrderStore = Ext.create('RaxaEmr.Outpatient.store.DoctorOrder');
    DoctorOrderModel = Ext.create('RaxaEmr.Outpatient.model.DoctorOrder', {
      uuid: null,
      //need to get myRecord variable of patientlist accessible here, so made it global variable
      //may need to set it later if new patient is created using DoctorOrder view (currently view/patient/draw.js)
      //other way is to create method in Controller which returns myRecord.data.uuid
      encounterType: localStorage.outUuidencountertype,
      encounterDatetime: Util.Datetime(new Date(), Util.getUTCGMTdiff()),
      //Should encounterDatetime be time encounter starts or ends?
      provider: localStorage.loggedInProvider,
    });

    DoctorOrderModel.data.obs = [];
    DoctorOrderModel.data.orders = [];
    console.log(DoctorOrderStore);

    //    this.sendDoctorOrderEncounter();
  },

  printDiagnosis: function() {

    // By default, "this" will be the object that fired the event.
    console.log("k2s: clickOnDiagnosis");
    // Ext.getCmp('plusDrugButton').fireEvent('tap'); // hack to press a real button and launch its dialog
    console.log("k2s: NOTE ADDING DIAGNOSES FOR NOW");
    // Print store. I'll have to pull info from this to print in Canvas
    // TODO: let's start with just the drug's name..
    var displayText = "";

    var store = Ext.getStore('diagnosedDisease');
    var data = store.getData();
    var itemCount = data.getCount();
    if(itemCount > 0) {
      displayText += "Diagnoses: \n";
    }

    for(var i = 0; i < itemCount; i++) {
      var itemData = data.getAt(i).getData();
      console.log(itemData);
      console.log(itemData.complain || "");
      displayText += ('* ' + itemData.complain + '\n');
    }
    console.log('display...', displayText);

    // TODO: Trigger refresh of Kinetic UI ... drug list should be updated
    g_diagnosis_list = displayText;

    /*     TODO UI Designers want prev Diagnosis to be showed (with different color ) 
      store.clearData(); // Prevents repeating.. now just need to create multiple prescription text boxes
*/
    Ext.getCmp('diagnosis-panel').setHidden(false);
    //      Ext.getCmp('drugaddform').reset();
    //      Ext.getCmp('treatment-panel').setActiveItem(TREATMENT.ADD);
    //drawDiagnosis('text');
    this.drawTextAtLowPoint('Hi');
  },

=======

    
		DoctorOrderStore = Ext.create('RaxaEmr.Outpatient.store.DoctorOrder');
			    
		DoctorOrderModel = Ext.create('RaxaEmr.Outpatient.model.DoctorOrder', {
			   //uuid: 			//need to get myRecord variable of patientlist accessible here, so made it global variable
							//may need to set it later if new patient is created using DoctorOrder view (currently view/patient/draw.js)
							//other way is to create method in Controller which returns myRecord.data.uuid
			    encounterType: localStorage.outUuidencountertype,// TODO figure out if should be prescription fill ?
			    encounterDatetime: Util.Datetime(new Date(), Util.getUTCGMTdiff()),   //Should encounterDatetime be time encounter starts or ends?
			    provider: localStorage.loggedInProvider,
        });				    
				    
			    DoctorOrderModel.data.obs = [];
  },
  


>>>>>>> Temporary merge branch 2
  listeners: {
    clickAddMedication: function() { // This function will be called when the 'quit' event is fired
      // By default, "this" will be the object that fired the event.
      console.log("k2s: clickAddMedication");

      var displayText = "";
      var store = Ext.getStore('drugpanel');
      var data = store.getData();
      var itemCount = data.getCount();
      if(itemCount > 0) {
        displayText += "Medications: \n";
      }

      for(var i = 0; i < itemCount; i++) {
        var itemData = data.getAt(i).getData();

        // TODO: Consolidate following code into loop
        if(!itemData.drugname) {
          // If no drug name, skip to next loop iteration
          continue;
        } else {
          displayText += ('* ' + itemData.drugname);
        }

        var duration = itemData.duration;
        if(duration) {
          displayText += (' - ' + duration);
        }

        var strength = itemData.strength;
        if(strength) {
          displayText += (' - ' + strength);
        }

        var quantity = itemData.duration;
        if(quantity) {
          displayText += (' - ' + quantity);
        }

        var frequency = itemData.frequency;
        if(frequency) {
          displayText += (' - ' + frequency);
        }

        var instruction = itemData.instruction;
        if(instruction) {
          displayText += (' - ' + instruction);
        }

        displayText += '\n';

        // return itemData.drugname || "";
      }
      console.log('display...', displayText);

      // TODO: Trigger refresh of Kinetic UI ... drug list should be updated
      g_diagnosis_text = displayText;


      //TODO UI Designers want prev Diagnosis to be showed (with different color    
      // store.clearData(); // Prevents repeating.. now just need to create multiple prescription text boxes

      Ext.getCmp('drugForm').setHidden(false);
      Ext.getCmp('drugaddform').reset();
      // Ext.getCmp('treatment-panel').setActiveItem(0);
    },

    clickOnDiagnosis: function() { // This function will be called when the 'quit' event is fired
      console.log("k2s: clickOnDiagnosis");
      // Print store. I'll have to pull info from this to print in Canvas
      var displayText = "";
      var store = Ext.getStore('diagnosedDisease');
      var data = store.getData();
      var itemCount = data.getCount();
      if(itemCount > 0) {
        displayText += "Diagnoses: \n";
      }
      console.log(DiagnosisPrinted);
      for(var i = DiagnosisPrinted; i < itemCount; i++) {
        var itemData = data.getAt(i).getData();
        displayText += ('* ' + itemData.complain + '\n');
<<<<<<< Temporary merge branch 1
=======
	DiagnosisPrinted++;

>>>>>>> Temporary merge branch 2
        // return itemData.drugname || "";
      }
      console.log('display...', displayText);

      // TODO: Trigger refresh of Kinetic UI ... drug list should be updated
      g_diagnosis_list = displayText;

      /*     TODO UI Designers want prev Diagnosis to be showed (with different color ) 
      store.clearData(); // Prevents repeating.. now just need to create multiple prescription text boxes
*/
      Ext.getCmp('diagnosis-panel').setHidden(false);
      //      Ext.getCmp('drugaddform').reset();
      //      Ext.getCmp('treatment-panel').setActiveItem(TREATMENT.ADD);
    }
  }
});

///////////////////////////////////////////////////////////
// Kinetic JS, drawing Canvas
///////////////////////////////////////////////////////////
imageCount = 0;

var DRAWABLE_X_MIN = 0;
var DRAWABLE_X_MAX = 700; // 708 - strict border
var DIFF = 144; // moving whole thing up a bit ... 1024 - 880 = 144
var DRAWABLE_Y_MIN = 240 - DIFF; // 230 - strict border 
var DRAWABLE_Y_MAX = 1024;
var DEFAULT_MODE = "draw"; // undefined
var STAGE_X = 768; //768
var STAGE_Y = 1024; //1024
var HISTORY_BASE_X = DRAWABLE_X_MAX;
var HISTORY_BASE_Y = DRAWABLE_Y_MIN + 196;
var HISTORY_ITEM_DIM = 64;

var CONTROL_BASE_X = DRAWABLE_X_MAX + 8;
var CONTROL_BASE_Y = DRAWABLE_Y_MIN - 6;
var CONTROL_ITEM_SPACING = 3;
var CONTROL_ITEM_DIM = 52;
var HIGH_Y_OFFSET = 5; // a little extra space

function isInDrawableArea(myX, myY) {
  up = {
    x: myX,
    y: myY
  };

  if((DRAWABLE_X_MIN <= up.x && up.x <= DRAWABLE_X_MAX) && (DRAWABLE_Y_MIN <= up.y && up.y <= DRAWABLE_Y_MAX)) {
    return true;
  } else {
    // console.log("not in drawable area: ", up.x, up.y );  
    return false;
  }
}

stage = new Object;

var setupCanvas = function() {

    var lowY = DRAWABLE_Y_MIN;
    var highY = DRAWABLE_Y_MIN;

    var newLine;
    var newLinePoints = [];
    var prevPos;
    var mode = DEFAULT_MODE;

    var historyYOffset = HISTORY_BASE_Y;

    backgroundLayer = new Kinetic.Layer();
    loadedImageLayer = new Kinetic.Layer(); // For re-loaded thumbs
    linesLayer = new Kinetic.Layer();
    textLayer = new Kinetic.Layer();
    controlsLayer = new Kinetic.Layer();
    
    
 
  /* Recreates stage saved in JSON
	var json = '{"attrs":{"width":768,"height":1024,"visible":true,"listening":true,"opacity":1,"x":0,"y":0,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false,"id":"stage"},"nodeType":"Stage","children":[{"attrs":{"clearBeforeDraw":true,"visible":true,"listening":true,"opacity":1,"x":0,"y":0,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false},"nodeType":"Layer","children":[{"attrs":{"width":768,"height":1024,"cornerRadius":0,"visible":true,"listening":true,"opacity":1,"x":0,"y":0,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false,"fill":"white"},"nodeType":"Shape","shapeType":"Rect"},{"attrs":{"visible":true,"listening":true,"opacity":1,"x":0,"y":0,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false,"width":768,"height":880},"nodeType":"Shape","shapeType":"Image"}]},{"attrs":{"clearBeforeDraw":true,"visible":true,"listening":true,"opacity":1,"x":0,"y":0,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false},"nodeType":"Layer","children":[{"attrs":{"points":[{"x":36,"y":198.5833282470703},{"x":45,"y":199.5833282470703},{"x":56,"y":200.5833282470703},{"x":76,"y":201.5833282470703},{"x":101,"y":204.5833282470703},{"x":135,"y":208.5833282470703},{"x":172,"y":212.5833282470703},{"x":211,"y":215.5833282470703},{"x":252,"y":217.5833282470703},{"x":293,"y":217.5833282470703},{"x":337,"y":213.5833282470703},{"x":383,"y":209.5833282470703},{"x":429,"y":204.5833282470703},{"x":469,"y":198.5833282470703},{"x":500,"y":193.5833282470703},{"x":521,"y":190.5833282470703},{"x":532,"y":188.5833282470703},{"x":540,"y":186.5833282470703},{"x":542,"y":185.5833282470703},{"x":542,"y":185.5833282470703},{"x":542,"y":185.5833282470703},{"x":541,"y":184.5833282470703},{"x":540,"y":184.5833282470703},{"x":540,"y":183.5833282470703},{"x":539,"y":183.5833282470703},{"x":539,"y":183.5833282470703},{"x":539,"y":183.5833282470703},{"x":539,"y":183.5833282470703},{"x":539,"y":183.5833282470703},{"x":538,"y":183.5833282470703}],"lineCap":"butt","dashArray":[],"detectionType":"pixel","visible":true,"listening":true,"opacity":1,"x":0,"y":0,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false,"stroke":"red"},"nodeType":"Shape","shapeType":"Line"}]},{"attrs":{"clearBeforeDraw":true,"visible":true,"listening":true,"opacity":1,"x":0,"y":0,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false},"nodeType":"Layer","children":[]},{"attrs":{"clearBeforeDraw":true,"visible":true,"listening":true,"opacity":1,"x":0,"y":0,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false},"nodeType":"Layer","children":[]},{"attrs":{"clearBeforeDraw":true,"visible":true,"listening":true,"opacity":1,"x":0,"y":0,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false},"nodeType":"Layer","children":[{"attrs":{"width":64,"height":64,"cornerRadius":0,"visible":true,"listening":true,"opacity":1,"x":700,"y":292,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false,"fill":"green","stroke":"black","strokeWidth":4},"nodeType":"Shape","shapeType":"Rect"},{"attrs":{"fontFamily":"ComicSans","text":"new","fontSize":21.333333333333332,"align":"left","verticalAlign":"top","fontStyle":"normal","padding":0,"width":"auto","height":"auto","detectionType":"path","cornerRadius":0,"lineHeight":1.2,"visible":true,"listening":true,"opacity":1,"x":708,"y":313.3333333333333,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false,"textFill":"white"},"nodeType":"Shape","shapeType":"Text"},{"attrs":{"visible":true,"listening":true,"opacity":1,"x":708,"y":90,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false,"width":52,"height":52,"stroke":"black","strokeWidth":1},"nodeType":"Shape","shapeType":"Image"},{"attrs":{"visible":true,"listening":true,"opacity":1,"x":708,"y":145,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false,"width":52,"height":52,"stroke":"black","strokeWidth":1},"nodeType":"Shape","shapeType":"Image"},{"attrs":{"visible":true,"listening":true,"opacity":1,"x":200,"y":56,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false,"width":128,"height":30,"stroke":"black","strokeWidth":1},"nodeType":"Shape","shapeType":"Image"},{"attrs":{"visible":true,"listening":true,"opacity":1,"x":708,"y":200,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false,"width":52,"height":52,"stroke":"black","strokeWidth":1},"nodeType":"Shape","shapeType":"Image"},{"attrs":{"visible":true,"listening":true,"opacity":1,"x":350,"y":56,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false,"width":150,"height":30,"stroke":"black","strokeWidth":1},"nodeType":"Shape","shapeType":"Image"},{"attrs":{"visible":true,"listening":true,"opacity":1,"x":700,"y":388,"scale":{"x":1,"y":1},"rotation":0,"offset":{"x":0,"y":0},"draggable":false,"width":64,"height":64,"stroke":"black","strokeWidth":4,"id":"PatientRecord"},"nodeType":"Shape","shapeType":"Image"}]}]}';
        // create node using json string
        var stage = Kinetic.Node.create(json, 'container');
*/

    // Setup stage, upon which all layers are built.
    stage = new Kinetic.Stage({
      id: "stage",
      container: "container",
      width: STAGE_X,
      height: STAGE_Y
    });

    // Layers
    stage.add(backgroundLayer);
    stage.add(linesLayer);
    stage.add(textLayer); // in front of "draw" layer, i.e. cant draw on a diagnosis. for now.
    stage.add(loadedImageLayer);
    stage.add(controlsLayer);
    moving = false;

<<<<<<< Temporary merge branch 1
    //To allow using stage from outside

    function getStage() {
      console.log('accessing getStage function in setupCanvas');
      return stage;
    }

=======
>>>>>>> Temporary merge branch 2
    ////////////////////////
    // Event Listeners 
    ////////////////////////
    stage.on("mousedown touchstart", function() {
      dragStart();
    });
    stage.on('mousemove touchmove', function() {
      dragMove();
    });
    stage.on("mouseup", function() {
      dragComplete();
    });
    stage.on("touchend", function() {
      dragComplete();
    });
    stage.on("paintDiagnosis", function() {
      console.log('printing Diagnosis');
      k2s.fireEvent('clickOnDiagnosis');
      Ext.getCmp('diagnosis-panel').setHidden(true);
      drawDiagnosis(g_diagnosis_list);
      
      
    });

    ////////////////////////
    // Event Handlers
    ////////////////////////

    // First touch or click starts a drag event
    function dragStart() {
      // console.log('dragStart');
      var up = stage.getUserPosition();
      if(!up || !isInDrawableArea(up.x, up.y) || mode !== 'draw') {
        return;
      }

      if(moving) {
        moving = false;
        backgroundLayer.draw();
      } else {
        newLinePoints = [];
        prevPos = stage.getUserPosition(); // Mouse or touch
        newLinePoints.push(prevPos);
        newLine = new Kinetic.Line({
          points: newLinePoints,
          stroke: "red",
        });
        linesLayer.add(newLine);

        moving = true;
      }
    }

    // While user holding down the mouse clicker or touch, continue dragging
    function dragMove() {
      var up = stage.getUserPosition();
      // console.log(up.x, up.y);
      if(!up || !isInDrawableArea(up.x, up.y)) {
        return;
      }

      // console.log('dragMove');
      if(mode !== 'draw') {
        return;
      }

      if(moving) {
        var mousePos = stage.getUserPosition(); // Mouse or touch
        var x = mousePos.x;
        var y = mousePos.y;
        newLinePoints.push(mousePos);
        updateBounds(mousePos);
        prevPos = mousePos;

        moving = true;
        linesLayer.drawScene();
      }
    }

    // On release of mouse or touch, done dragging
    function dragComplete() {
      console.log('drag complete');

      var up = stage.getUserPosition();
      if(!up || !isInDrawableArea(up.x, up.y)) {
        return;
      }

      if(mode !== 'draw') {
        return;
      }

      moving = false;
    }

    // Keep track of the current low and high bounds (y-axis) for where a user
    // has already added content onto the canvas. The idea is that we want to add
    // structured data (diagnoses, prescriptions, ...) into blank areas on the 
    // canvas where the user hasn't yet written.
    function updateBounds(mousePos) {
      var y = mousePos.y;
      if(y < lowY || lowY == undefined) {
        lowY = y;
      }
      if(y > highY || highY == undefined) {
        highY = y + HIGH_Y_OFFSET;
      }
    }

    // SAVING 

    // Save - event handler
    function onSaveCanvas() {
      // Callback, since the stage toDataURL() method is asynchronous, 
      k2s.saveLoadMask();
      saveDrawableCanvas();
    }

    // Save - saves just "drawable" portion of canvas
    function saveDrawableCanvas() {
      // TODO: Hide/show paper layer when creating dataURL "screenshot"?
      // backgroundLayer.hide();

      // Convert stage to image. From image, create KineticImage and crop to "drawable" portion
      stage.toImage({
<<<<<<< Temporary merge branch 1
        callback: function(i) {
=======
        callback: function(i) { i.id= "PatientRecord" ; console.log(i);
>>>>>>> Temporary merge branch 2
          kineticImage = new Kinetic.Image({
            image: i,
            x: 0,
            y: 0,
<<<<<<< Temporary merge branch 1
=======
	    id : 'PatientRecord',
>>>>>>> Temporary merge branch 2
            crop: {
              x: DRAWABLE_X_MIN,
              y: DRAWABLE_Y_MIN,
              width: DRAWABLE_X_MAX - DRAWABLE_X_MIN,
              height: DRAWABLE_Y_MAX - DRAWABLE_Y_MIN
            }
          });

          // Create a temp layer and add the "screenshot" image. If it's not added to a layer,
          // or added to the stage, then Kinetic won't allow you to call toDataUrl() on it.
          var temp_layer = new Kinetic.Layer();
          temp_layer.add(kineticImage);
          stage.add(temp_layer);
          var dataUrl = kineticImage.toDataURL({
            callback: function(dataUrl) {
              console.log('callback for dataUrl');
            },
<<<<<<< Temporary merge branch 1
=======
	    mimeType : 'image/jpeg',
	    quality  : .3  
>>>>>>> Temporary merge branch 2
          });
          
          // Delete temp layer
          temp_layer.remove();
          addHistoryItem('', 'yellow', dataUrl);
          // TODO: delete kineticImage?
          // backgroundLayer.show();
        }
      });

    }

    // Save - helper, adds items to history store (list is visible in history view)

    function addHistoryItem(name, color, dataUrl) {
      // if No data URL, then it's the "special" case for "new"
      if(!dataUrl) {
        return ;
      } else {
        
        // If there is a dataUrl, then use that image to create thumb, linking to previous visit
        // Keep track of all history Images; allows user to load history via Sencha UI
        var visitHistoryStore = Ext.getStore('visitHistoryStore');
        visitHistoryStore.add({
          title: 'Visit <x>',
          // date: today
          uuid: 'FAKE-UUID-PUSHED',
          // TODO: need to save/retrieve from OpenMRS
          diagnosisCount: 0,
          treatmentCount: 0,
<<<<<<< Temporary merge branch 1
          imgSrc: dataUrl
        });
=======
          imgSrc: dataUrl,
	  id: 'PatientRecord'
        }); console.log(visitHistoryStore);
>>>>>>> Temporary merge branch 2
      }
    }

    ////////////////////////////////////////////////
    // Initialize
    //  - Draw background
    //  - Add Controls... Pencil, eraser, save
    ////////////////////////////////////////////////
    // Background - blank white canvas
    background = new Kinetic.Rect({
      x: 0,
      y: 0,
      width: stage.getWidth(),
      height: stage.getHeight(),
      fill: "white"
    });
    backgroundLayer.add(background);

    // Background - image of OPD-lite: paper, inactive (currently) buttons, etc
    var imageObj = new Image();
    imageObj.onload = function() {
      console.log("image loaded");
      console.log(stage.getWidth(), stage.getHeight());
      var backgroundImage = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: stage.getWidth(),
        height: 880
      });
      backgroundLayer.add(backgroundImage);
      backgroundLayer.draw();
    }
    var file = "resources/images/background-768x880.png";
    imageObj.src = file;
<<<<<<< Temporary merge branch 1

=======
/*
>>>>>>> Temporary merge branch 2
    var controlItems = [{
      // Pencil (Draw mode)
      image: 'resources/images/pencil.png',
      x: CONTROL_BASE_X,
      y: CONTROL_BASE_Y + 0 * (CONTROL_ITEM_DIM + CONTROL_ITEM_SPACING),
      width: CONTROL_ITEM_DIM,
      height: CONTROL_ITEM_DIM,
      handler: function() {
        console.log('mode = draw');
        mode = "draw";
      }
    }, {
      // Eraser (Erase mode)
      image: 'resources/images/eraser.png',
      x: CONTROL_BASE_X,
      y: CONTROL_BASE_Y + 1 * (CONTROL_ITEM_DIM + CONTROL_ITEM_SPACING),
      width: CONTROL_ITEM_DIM,
      height: CONTROL_ITEM_DIM,
      handler: function() {
        console.log('disabled, for now, since eraser isnt working');
        // mode = "erase";
      }
    }, {

      //   handler: function() { console.log('keyboard not implemented');},
      //   image: 'resources/images /keyboard.png'
      // }, {
      // Save
      image: 'resources/images/save.png',
      x: CONTROL_BASE_X,
      y: CONTROL_BASE_Y + 2 * (CONTROL_ITEM_DIM + CONTROL_ITEM_SPACING),
      width: CONTROL_ITEM_DIM,
      height: CONTROL_ITEM_DIM,
      handler: function() {
        console.log('tapped save button');
        onSaveCanvas();
      },
<<<<<<< Temporary merge branch 1
=======
      image: 'resources/images/save.png'
    },{
      x: CONTROL_BASE_X,
      y: CONTROL_BASE_Y + 3 * (CONTROL_ITEM_DIM + CONTROL_ITEM_SPACING),
      width: CONTROL_ITEM_DIM,
      height: CONTROL_ITEM_DIM,
      handler: function() {
	console.log('End OPD VISIT');
        k2s.config.sendDoctorOrderEncounter();
      },
      image: 'resources/images/EndOfOPD.png'
>>>>>>> Temporary merge branch 2
    }, {
      // Add diagnosis
      image: 'resources/images/plus_diagnosis.png',
      x: 200,
      y: DRAWABLE_Y_MIN - 40,
      width: 128,
      height: 30,
      handler: function() {
        console.log("Bringing diagnoses modal window.")
        onClickDiagnosis();
      }
    }, {
      // Add medication
      image: 'resources/images/plus_medication.png',
      x: 350,
      y: DRAWABLE_Y_MIN - 40,
      width: 150,
      height: 30,
      handler: function() {
        onClickMedication();
      }
    }, {
      // Add investigation
      image: 'resources/images/plus_investigation.png',
      x: 514,
      y: DRAWABLE_Y_MIN - 40,
      width: 182,
      height: 30,
      handler: function() {
        console.log('INVESTIGATIONS: TODO');
      }
    }, {
      // New
      image: 'resources/images/new.png',
      x: CONTROL_BASE_X,
      y: CONTROL_BASE_Y + CONTROL_ITEM_DIM*3 + CONTROL_ITEM_SPACING*3,
      width: CONTROL_ITEM_DIM,
      height: CONTROL_ITEM_DIM,
      handler: function() {
          // Reset the drawable canvas to be blank
          // Also reset highY, so that text will appear in correct place relative to doctor handwriting
          // loadedImageLayer.hide();
          linesLayer.removeChildren();
          textLayer.removeChildren();
          highY = DRAWABLE_Y_MIN;
          stage.draw();
      }
    }];
 */   

        var controlItems = [{
      // Pencil (Draw mode)
      image: 'resources/images/pencil.png',
      x: CONTROL_BASE_X,
      y: CONTROL_BASE_Y + 0 * (CONTROL_ITEM_DIM + CONTROL_ITEM_SPACING),
      width: CONTROL_ITEM_DIM,
      height: CONTROL_ITEM_DIM,
      handler: function() {
        console.log('mode = draw');
        mode = "draw";
      }
    }, {
      // Eraser (Erase mode)
      image: 'resources/images/eraser.png',
      x: CONTROL_BASE_X,
      y: CONTROL_BASE_Y + 1 * (CONTROL_ITEM_DIM + CONTROL_ITEM_SPACING),
      width: CONTROL_ITEM_DIM,
      height: CONTROL_ITEM_DIM,
      handler: function() {
        console.log('disabled, for now, since eraser isnt working');
        // mode = "erase";
      }
    }, {

<<<<<<< Temporary merge branch 1
=======
      //   handler: function() { console.log('keyboard not implemented');},
      //   image: 'resources/images /keyboard.png'
      // }, {
      // Save
      image: 'resources/images/save.png',
      x: CONTROL_BASE_X,
      y: CONTROL_BASE_Y + 2 * (CONTROL_ITEM_DIM + CONTROL_ITEM_SPACING),
      width: CONTROL_ITEM_DIM,
      height: CONTROL_ITEM_DIM,
      handler: function() {
        console.log('tapped save button');
        onSaveCanvas();
      },
    } , {
      //Temp: Sending OPD Encounter
      image: 'resources/images/EndOfOPD.png',
      x: CONTROL_BASE_X,
      y: CONTROL_BASE_Y + 4 * (CONTROL_ITEM_DIM + CONTROL_ITEM_SPACING),
      width: CONTROL_ITEM_DIM,
      height: CONTROL_ITEM_DIM,
      handler: function() {
        console.log('sending Doctor Encounter');
        k2s.config.sendDoctorOrderEncounter();
	//TODO Move to patientlist and clear canvas
      },
    }, {
      // Add diagnosis
      image: 'resources/images/plus_diagnosis.png',
      x: 200,
      y: DRAWABLE_Y_MIN - 40,
      width: 128,
      height: 30,
      handler: function() {
        console.log("Bringing diagnoses modal window.")
        onClickDiagnosis();
      }
    }, {
      // Add medication
      image: 'resources/images/plus_medication.png',
      x: 350,
      y: DRAWABLE_Y_MIN - 40,
      width: 150,
      height: 30,
      handler: function() {
        onClickMedication();
      }
    }, {
      // Add investigation
      image: 'resources/images/plus_investigation.png',
      x: 514,
      y: DRAWABLE_Y_MIN - 40,
      width: 182,
      height: 30,
      handler: function() {
        console.log('INVESTIGATIONS: TODO');
      }
    }, {
      // New
      image: 'resources/images/new.png',
      x: CONTROL_BASE_X,
      y: CONTROL_BASE_Y + CONTROL_ITEM_DIM*3 + CONTROL_ITEM_SPACING*3,
      width: CONTROL_ITEM_DIM,
      height: CONTROL_ITEM_DIM,
      handler: function() {
          // Reset the drawable canvas to be blank
          // Also reset highY, so that text will appear in correct place relative to doctor handwriting
          // loadedImageLayer.hide();
          linesLayer.removeChildren();
          textLayer.removeChildren();
          highY = DRAWABLE_Y_MIN;
          stage.draw();
      }
    }];

>>>>>>> Temporary merge branch 2
    // Creates a 'clickable' item with a touch handler.
    // requires parameters for item: x,y,width,height,src,handler
    function createControlItem(item) {
      console.log(item)
      var pencilImageObj = new Image();
      pencilImageObj.onload = function() {
        var box = new Kinetic.Image({
          x: item.x,
          y: item.y,
          width: item.width,
          height: item.height,
          // stroke: "black",
          // strokeWidth: 1,
          image: pencilImageObj
        });
        box.on('click touchstart', item.handler);
        controlsLayer.add(box);
        controlsLayer.draw();
      }
      pencilImageObj.src = item.image;
    }
<<<<<<< Temporary merge branch 1

    for(var i = 0; i < controlItems.length; i++) {
      createControlItem(controlItems[i]);
    }

=======
    
        for(var i = 0; i < controlItems.length; i++) {
      createControlItem(controlItems[i]); console.log(i);
    
/*<<<<<<< HEAD
 
    createControlItem(controlItems[0], 0);
    createControlItem(controlItems[1], 1);
    createControlItem(controlItems[2], 2);
    createControlItem(controlItems[3], 3);
*/
// // Overlaps with "new" history item. just to help make it easier to understand
	// var newImgObj = new Image();
    // newImgObj.onload = function() {
    //   var box = new Kinetic.Image({
    //     x: CONTROL_BASE_X,
    //     y: CONTROL_BASE_Y + CONTROL_ITEM_DIM*3 + CONTROL_ITEM_SPACING*3,
    //     width: CONTROL_ITEM_DIM,
    //     height: CONTROL_ITEM_DIM,
    //     stroke: "black",
    //     strokeWidth: 1,
    //     image: newImgObj
    //   });
    //   box.on('click touchstart', function() {
    //     onSaveCanvas();
    //   });
    //   controlsLayer.add(box);
    //   controlsLayer.draw();
    // }
    // newImgObj.src = 'resources/images/new.png';
    var plusDiagnosisImgObj = new Image();
    plusDiagnosisImgObj.onload = function() {
      var box = new Kinetic.Image({
        x: 200,
        y: DRAWABLE_Y_MIN - 40,
        width: 128,
        height: 30,
        stroke: "black",
        strokeWidth: 1,
        image: plusDiagnosisImgObj
      });
      box.on('click touchstart', function() {
        console.log("Bringing diagnoses modal window.")
        // TODO: Rewrire to pull up diagnosis window.
        //  NOTE... there's some naming confusion because i originally wired up the diagnosis
        //  button to open the medications/prescriptions window
         onClickDiagnosis();
      });
      controlsLayer.add(box);
      controlsLayer.draw();
    }
    plusDiagnosisImgObj.src = 'resources/images/plus_diagnosis.png';

    var plusMedicationImgObj = new Image();
    plusMedicationImgObj.onload = function() {
      var box = new Kinetic.Image({
        x: 350,
        y: DRAWABLE_Y_MIN - 40,
        width: 150,
        height: 30,
        stroke: "black",
        strokeWidth: 1,
        image: plusMedicationImgObj
      });
      box.on('click touchstart', function() {
        onAddDiagnosis();
      });
      controlsLayer.add(box);
      controlsLayer.draw();
/*=======
*/

//>>>>>>> 107bd663c7b8fde13e0675aa823a35e49c78ce9b
    }
    }
>>>>>>> Temporary merge branch 2
    //
    // Handlers
    //

    function onClickDiagnosis() {
<<<<<<< Temporary merge branch 1
      console.log("add diagnosis");
      k2s.clickDiagnosis();
      drawDiagnosis(g_diagnosis_list);
=======
        console.log("add diagnosis");
        k2s.clickDiagnosis();
//        drawDiagnosis(g_diagnosis_list);
>>>>>>> Temporary merge branch 2
    }

    function onClickMedication() {
      // Get user input
      console.log("add diagnosis")
      // var input = window.prompt("What's the diagnosis?","Tuberculosis");
      // Trigger launch of modal dialog in Sencha
      k2s.addMedication();

      // inserts a dianosis wherever there's untouched space on canvas
      // drawTextAtLowPoint(input);
      drawDiagnosis(g_diagnosis_text);
    }

    function drawDiagnosis(text) {
      if(text) {
        drawTextAtLowPoint(text);
      }
    }

    function drawTextAtLowPoint(text) {
      console.log("drawTextAtLowPoint");

      // Set background color of text box according to type of text
      if(text.indexOf('Medications') >= 0) {
        bgFill = '#44f';
      } else if(text.indexOf('Diagnoses') >= 0) {
        bgFill = '#f44';
      } else {
        bgFill = '#eee';
      }

      var complexText = new Kinetic.Text({
        x: 20,
        stroke: '#555',
        strokeWidth: 3,
        fill: bgFill,
        text: '',
        fontSize: 14,
        fontFamily: 'Calibri',
        textFill: '#000',
        padding: 10,
        align: 'left',
        fontStyle: 'italic',
        shadow: {
          color: 'black',
          blur: 1,
          offset: [10, 10],
          opacity: 0.2
        },
        cornerRadius: 10
      });

      complexText.setAttrs({
        y: highY,
        text: text,
        fill: bgFill
      });
      textLayer.add(complexText);
      stage.draw();
      highY += (complexText.textHeight * complexText.textArr.length + 1) + 30;

    }
  };

///////////////////////////////////////////////////////////
// Sencha code
//  - well, it's a glorified canvas, wrapped in Sencha
///////////////////////////////////////////////////////////
Ext.define('RaxaEmr.Outpatient.view.patient.draw', {
  extend: 'Ext.Container',
  xtype: 'draw-panel',
  id: 'drawPanel',
  config: {
    layout: 'hbox',
    items: [{
      xtype: 'container',
      id: 'opdPatientDataEntry',
      width: STAGE_X,
      height: STAGE_Y,
      layout: 'vbox',
      items: [{
        scroll: false,
        html: '<div id="container" ></div>'
      }],
      listeners: {
        painted: function() {
          console.log("painted");
          setupCanvas();
          k2s.config.initStore();
        }
      },

    }]
  },
<<<<<<< Temporary merge branch 1
});
=======
});
>>>>>>> Temporary merge branch 2
