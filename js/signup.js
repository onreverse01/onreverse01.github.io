function backto(){
    history.back();
}

function saveEntry(){
    var $frm = $(document.entryFrm);
    
    var $userid = $frm.find("[name=userid]").val()
    var $userpwd = $frm.find("[name=userpwd]").val()
    var $email = $frm.find("[name=useremail]").val()
    
    //ID
    //첫글자는 영소문자
    //길이는 4~12자리

    var useridcon = /[a-z]/;
    var lenid = /^.{4,12}$/;

    if(useridcon.test($userid)==false){
        alert("첫글자는 영어 소문자로 시작해야 합니다.");
        return false;
    }
    if(lenid.test($userid)==false){
        alert("아이디는 4~12자리여야 합니다.");
        return false;
    }

    //비밀번호
    //숫자,문자,특수문자 포함
    //길이는 8~15자리

    var pwdcon1 = /[A-Za-z]/;
    var pwdcon2 = /\d/;
    var pwdcon3 = /[!-/:-@[-`{|}~]/;
    var lenpwd = /^.{8,15}$/;

    if(!lenpwd.test($userpwd)){
        alert("비밀번호는 8~15자리여야 합니다.");
        return false;
    }
    if(
        (!pwdcon1.test($userpwd)) || 
        (!pwdcon2.test($userpwd)) || 
        (!pwdcon3.test($userpwd))
    ){
        alert('숫자,문자,특수문자 하나이상 포함해야 합니다.');
        return false;
    }

    //비밀번호 확인
    if(userpwdOk.value != $userpwd){
        alert("비밀번호가 같지 않습니다.");
        return false;
    }

    //이메일
    if(/^[0-9a-z]{4,12}@[\w]{2,}\.(([A-Za-z]{1,})|([A-Za-z]{1,}\.[A-Za-z]{1,}))$/.test($email) == false){
        alert("올바르지 않은 이메일입니다.");
        return false;
    }

    alert("회원가입 완료!");

    //저장된 값
    var entry ={
        userid: $userid,
        userpwd : $userpwd,
        useremail : $email
    };

    //entries배열
    var entries = JSON.parse(localStorage.getItem('entries')) || [];

    entries.push(entry);

    //json문자열로 변환
    var jsonEntries = JSON.stringify(entries);

    //localStorage에 저장
    localStorage.setItem("entries", jsonEntries);

    //폼 전체 초기화
    document.entryFrm.reset();

    //방명록 최신화
    showEntries();

    open("index.html", "_self");
}
function showEntries(){
    var entries = JSON.parse(localStorage.getItem("entries")) || [];
    console.log(entries);
    console.log(entries.length);
    var $table = $("#tbl-entry");
    console.log($table);
    $table.html("<tr><th>No</th><th>아이디</th></tr>");

    if(entries.length){
        $.each(entries, function(i, entry){
            var $tr = $("<tr>");
            $tr
                .append("<td>" + (i + 1) + "</td>")
                .append("<td>" + entry.userid + "</td>")
                .appendTo($table);
        });
    }
    else{
        $table.append("<tr><td colspan='3'>조회된 방명록이 없습니다.</td></tr>");
    }
}