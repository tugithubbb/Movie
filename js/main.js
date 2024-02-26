window.onscroll = function() {
    // Kiểm tra vị trí cuộn của cả body và documentElement
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Làm hiệu ứng khi vị trí cuộn lớn hơn 200 pixel
    if (scrollTop > 200) {
        // Thực hiện translate(-50%, 0) khi cuộn xuống
        document.getElementById("headerfix").style.transform = "translate(-50%, 0)";
    } else {
        // Thực hiện translate(-50%, -100%) khi cuộn lên
        document.getElementById("headerfix").style.transform = "translate(-50%, -100%)";
    }
}