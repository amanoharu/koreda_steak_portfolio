
var co4_drink_area = document.getElementById('co4_drink_area');
var code = [];
for(i = 0; i < co4_drink_area.childElementCount; i++){
    code.push('<div class="co4_drink_box is_empty"></div>');
}

co4_drink_area.insertAdjacentHTML('beforeend', code.join(''));