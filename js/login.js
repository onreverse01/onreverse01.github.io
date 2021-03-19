function form_submit(){
    open("signup.html", "_self");
}
function back_to(){
    history.back();
}

function login11(){
    var $userid = $('#userid');
    var $userpw = $('#userpwd');
    var valueid = localStorage[$userid.val()];
    var valuepw = localStorage[$userpw.val()];
    var entries = JSON.parse(localStorage.getItem("entries")) || [];
    console.log(entries);
        //id확인
        if(valueid != entry.userid){
            alert("유효한 아이디를 입력하세요.");
            userid.select();
            return false;
        }
        //pw확인
        if(valuepw != entry.userpwd){
            alert("유효한 비밀번호를 입력하세요.");
            // userpwd.select();
            return false;
        }
        else{
            alert("로그인 완료!");
            location.href = "./index.html"
            return true;
        }
    
        
}


// window.onload=function(){
//     document.querySelector("form").onsubmit = function(e){
//         console.log(e);
//         var $userid = $('#userid');
//         var $userpw = $('#userpwd');
//         var valueid = localStorage[$userid.val()];
//         var valuepw = localStorage[$userpw.val()];
//         //id확인
//         if(valueid != entry.userid){
//             alert("유효한 아이디를 입력하세요.");
//             userid.select();
//             return false;
//         }
//         //pw확인
//         if(valuepw != entry.userpwd){
//             alert("유효한 비밀번호를 입력하세요.");
//             // userpwd.select();
//             return false;
//         }
//         else{
//             alert("로그인 완료!");
//             location.href = "./index.html"
//             return true;
//         }
        
//     }
// }