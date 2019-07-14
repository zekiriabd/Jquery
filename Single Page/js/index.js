void function index_function(undefined) {

 function loadControlTemplate(dest_id, fileUrl) {
  var placeHolder = document.getElementById(dest_id);
  Add_Html_Page(placeHolder, ToInnerHTML(fileUrl));
 }

 function Page1_click(e) {
     $("#page1").removeClass("active");
     $("#page2").addClass("active");
 }

 function Page2_click(e) {
     $("#page2").removeClass("active");
     $("#page1").addClass("active");
 }
 /*==============================================
    - Get User info 
    - Add user pages in master page 
    ==============================================*/
$(document).ready(function () {
    loadControlTemplate('page1_content', "controls/page1.html");
    loadControlTemplate('page2_content', "controls/page2.html");
    //loadControlTemplate('left_bar_control', "controls/left_bar.html");
    //loadControlTemplate('left_bar_control', "controls/left_bar.html");


    $("#btn_page1").click(function (e) { Page1_click(e) });
    $("#btn_page2").click(function (e) { Page2_click(e) });

 });

}.call();