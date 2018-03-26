# MakeSpace Tip Calculator

MakeSpace Tip Calculator is an app for [MakeSpace](http://makespace.com) Gmail domain users. It searches user's mailbox for e-mail messages that contain info about tips received and makes a digest of data found.

## Use

1. Open [MakeSpace Tip Calculator](https://script.google.com/macros/s/AKfycbyPxNOVdbnIp2dvtic2SubToACs_dYhdL9p5zqJchW__cvb5g4/exec) in web browser.
2. Login with MakeSpace username and password.
3. Click **Review Permissions** button (first time use only).
4. Click **Allow** button in **Request for Permission** dialog (first time use only).
5. Select period of time to search in.
6. Click **Go** button and relax...

**Note:** Dates selected are not included in the digest.

**Example:**  To calculate June data, set **After** to 05/31/2016 and **Before** to 07/01/2016.

## Develop

To create your own development version of MakeSpace Tip Claculator, click [here](https://script.google.com/d/1upJo8oNLKw91pylkM9Xa_s63_lFcbtOXNqcNdI5Jhyusg-ZgdLEEkm4I/edit?usp=sharing) and choose **File > Make a copy...** in the Google Apps Script editor.

Using [gapps](https://github.com/danthareja/node-google-apps-script), you can develop your Apps Script locally and push files to the Apps Script servers. This allows you to use any editor of your choice, version control, and other modern webdev patterns in to Apps Script development.

Since gapps does not haave pull option, use `sh gapps-pull.sh` to pull changes made with Gogle Apps Script Editor (replace PROJECT_ID with your own project ID). **Warning:** This will delete all local changes not commited.

## Test

[QUnit for Google Apps Script](https://github.com/simula-innovation/qunit/tree/gas/gas) is used for testing. To run tests add `?test=server-tests` to the app link, or click [here](https://script.google.com/a/macros/makespace.com/s/AKfycbylV6dK4FQck5d-DP6OblvSIvQkLYajRZO04njWT_4yRE378GU/exec?test=server-tests).

## Release Notes

### 0.5.2
-- bug fixes  
-- performance improvements    

### 0.5.1
-- bug fixes  

### 0.5.0
-- UI update  
-- add preselected periods  
-- bug fix  

### 0.4.2
-- bug fixes  

### 0.4.1
-- bug fixes  

### 0.4.0
-- UI update  
-- add Help and About pages  
-- remove stats functionality  
-- bug fixes  

### 0.3.0
-- add stats functionality  

### 0.2.1
-- bug fixes  

### 0.2.0
-- UI re-designed with [Bootstrap](http://getbootstrap.com/)  
-- add alerts  
-- bug fixes  

### 0.1.0
-- initial release  
-- UI designed with [Material Dasign Lite](https://getmdl.io/)  
