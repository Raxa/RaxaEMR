Raxa-JSS
========
The Raxa JSS EMR is an information management system ("Raxa") designed for and to be initially implemented at the [Jan Swasthya Sahyog (JSS)](http://jssbilaspur.org), a healthcare non-governmental organization (NGO) working in a largely rural, underserved community in India.
Raxa JSS EMR is an OpenMRS based Health Information System.

This project is an open source initiative to enhance care delivery, administration, quality improvement, research and patient access at JSS by digitizing information as it currently flows in its rural hospital and community outreach programs.  It is being created using free, open source tools and is available for anyone's usage in India and beyond.
For more information, please see our wiki:
https://raxaemr.atlassian.net/wiki/display/RAXAJSS/Raxa+JSS+EMR

The project uses HTML5, CSS and JavaScript as the front-end technologies and uses REST webservices provided by OpenMRS.
This uses Sencha Touch 2 and Sencha ExtJS 4.1 as the Framework for MVC and UI. This also uses Jasmine 1.1.0 is used for Behavior-Driven Testing.

License
=======
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. 
You may obtain a copy of  the License at

     http://www.apache.org/licenses/LICENSE-2.0
     
Unless required by applicable law or agreed to in writing, software  distributed under the License is distributed on an "AS IS" 
BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing 
permissions and limitations under the License.

Mailing Lists
=============
[Contributors Mailing List](https://groups.google.com/group/raxa-jss-emr-contributors)

[Developers Mailing List](https://groups.google.com/group/raxa-jss-emr-developers)

[UI/UX Mailing List](https://groups.google.com/group/raxa-jss-emr-uiux)


Downloading the App
===================
#####Using Git 
1.[Sign up for a GitHub account](https://github.com/signup/free)

2.[Set up Git and SSH keys](http://help.github.com/set-up-git-redirect/)

3.Create a fork of Raxa-JSS from [GitHub Project Page](https://github.com/Raxa/Raxa-JSS)

4.To clone your fork use "git clone git@github.com:(Your GitHub username)/Raxa-JSS.git" in your terminal / Git Bash

To commit code, go to [How to Commit Code](https://raxaemr.atlassian.net/wiki/display/RAXAJSS/Contributing+code+-+How+to+Commit+Code)

#####Using direct download
[Compressed File](https://github.com/Raxa/Raxa-JSS/zipball/master)

Demo App
========
You can check our latest code of Raxa JSS EMR on http://demo.raxa.org

Running the App
===============
(NOTE: Copy Raxa-JSS folder to ROOT folder of webserver. All paths are written as localhost. Please adjust paths accordingly.) 

To view the login screen, navigate to http://localhost/Raxa-JSS/src/

The project tree is set up as follows:

     /src    
        /app                 -Login Module (Sencha Touch 2.0) for Raxa-JSS EMR
        /chw                 -Community Health Worker Module
        /data                -Stores the data shared with all other modules
        /laboratory          -Laboratory module (using Sencha ExtJS 4.1)
        /lib                 -Contains Library files (Sencha ExtJS & Sencha Touch)
        /outpatient          -Outpatient module (using Sencha Touch 2.0)         
        /patient-facing      -Files for the Patient Module will be stored here
        /pharmacy            -Pharmacy module (using Sencha Touch 4.1)           
        /registration        -Registration module (using Sencha Touch 2.0)
        /registrationextjs4  -Registration module (using Sencha ExtJS 4.1)       
        /resources           -common resources shared with other modules    
           /common           -common xtypes needed on all screens eg. topbar
           /css              -stores cascading style sheet
           /img              -stores images needed in all modules
           /script           -stores scripts needed in various modules
        /screener            -Screener module (using Sencha Touch 2.0)
        /voice               -Voice Module files to be added here
     /test                   -Test Module (using Jasmine 1.1.0)
        /lib                 -Contains testing library (Jasmine 1.1.0)
        /specs               -Test specs of every module goes into corresponding folder
              
              
Running tests
=============
At present, all tests are linked from here:
http://localhost/Raxa-JSS/test/run-tests.html




Sencha Workspace
=============

[Workspace documentation] (http://docs.sencha.com/ext-js/4-1/#!/guide/command_workspace)

**Adding New Apps**

If you want to make a new app, cd to the ```lib/ext``` folder and run ```sencha generate app <appNamespace> <pathToAppFolder>```. To generate a new sencha app, cd to ```lib/touch``` and run the same command. This will appropriately generate the app with the correct path to the library files, sencha/workspace configs for building, etc.

**Building Apps**
When building apps, pay special attention to ```.sencha/workspace/sencha.cfg``` and ```src/<module>/.sencha/app/sencha.cfg```. The config file specifies folders that are included during the Ant build process.

**Webapp**

To create 'compiled' webapp builds, run the following sencha command:
```
sencha app build <build_type>
```
where ```<build_type>``` can be ```testing```, ```production```, or ```package```.

For more information on the role of each of these build types, please see the sencha cmd documentation. (Note that the ```production``` webapp build is not yet working for Outpatient. This version concatenates most of the applications JavaScript files, but for any .js files referred to in app.json, it fetches those JavaScript files dynamically. This causes the app to fail to load, if you include a file like Util.js in app.json. The reason is that Util.js contains which has global variables and functions which are called during setup, but because the files haven't been fetched yet, setup fails.)

**Native**

To create the native (device or emulator) builds, Sencha touch uses the packager.json file to configure build options.

- [iOs Packaging](http://docs.sencha.com/touch/2-0/#!/guide/native_packaging)
- [Android Packaging](http://docs.sencha.com/touch/2-0/#!/guide/native_android)
- [iOs Provisioning](http://docs.sencha.com/touch/2-0/#!/guide/native_provisioning)

To build, exceute the following command 
```
sencha app build native
```

**Common files**

Common files - e.g. models, stores, views - should go in ```/src/common/```. Group them like plugins, e.g.

```
/src/common/<plugin_name>
/src/common/<plugin_name>/model/plugin.js
/src/common/<plugin_name>/store/plugin.js
/src/common/<plugin_name>/view/mainView.js
/src/common/<plugin_name>/view/modalDialog.js
```

This way it's easy to include a plugin in an application by 

First, adding a SetPath command to ```app.js```

```
Ext.Loader.setPath({
    'RaxaEmr.common.<plugin_name>': '/src/common/<plugin_name≥', 
    ...
});
```

Next, updating ```src/<module>/.sencha/app/sencha.cfg``` to include the plugin
```
app.<plugin_name> = ${app.dir}/../common/<plugin_name>
app.classpath=${app.dir}/app.js,${app.dir}/app,${app.<plugin_name>}

```