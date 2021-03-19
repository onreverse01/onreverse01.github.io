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