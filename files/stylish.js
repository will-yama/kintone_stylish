(function($) {
    "use strict";
    kintone.events.on("app.record.index.show", function(e) {
        
        document.getElementById("fakepasswordinput").addEventListener("keypress", checkEnter);
        
        function checkEnter(e) {
            if (e.keyCode == 13) {
            console.log("enter pressed!")
            document.getElementById("whiteblock").style.display = "none";
            document.getElementsByClassName("stylishWindow")[0].style.visibility = "visible";
            fade(document.getElementsByClassName("loginwindow")[0]);
            }
            else{
                return false;
            }
        }
        
        function fade(element) {
            var op = 1;  // initial opacity
            var timer = setInterval(function () {
                if (op <= 0.1){
                    clearInterval(timer);
                    element.style.display = 'none';
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op -= op * 0.1;
            }, 70);
        }
        

        var appID = kintone.app.getId();
        var body = {
        "id": appID
        };
        kintone.api(kintone.api.url('/k/v1/app', true), 'GET', body, function(resp) {
            // success
            console.log(resp);
            document.getElementById("appname").innerHTML = resp.name;
            document.getElementById("appID_value").innerHTML = resp.appId;
            document.getElementById("createdat_value").innerHTML = resp.createdAt;
            document.getElementById("createdby_value").innerHTML = resp.creator.name;
            document.getElementById("updatedat_value").innerHTML = resp.modifiedAt;
            document.getElementById("updatedby_value").innerHTML = resp.modifier.name;
        }, function(error) {
            // error
            console.log(error);
        });
    });
})();
