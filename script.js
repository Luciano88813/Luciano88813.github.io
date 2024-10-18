// script.js

document.getElementById('subscribe-btn').addEventListener('click', function() {
    const btn = this;
    if (btn.innerText === '关注') {
        btn.innerText = '已关注';
        btn.style.backgroundColor = 'gray'; // 改变按钮颜色
        alert('你已关注该频道！');
    } else {
        btn.innerText = '关注';
        btn.style.backgroundColor = '#FF0000'; // 改回原来的颜色
        alert('你已取消关注该频道！');
    }
});
