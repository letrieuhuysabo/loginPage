let indexOfServices = 0;
window.onload = function(){
    // hiện thông báo khi ấn quên mật khẩu
    let forgetPass = document.getElementById("forgetPass");
    forgetPass.onclick = function(){
        let announce = document.getElementById("announceAboutForgetPassword");
        announce.classList.remove("hidden");
    }
    // chuyển qua lại giữa các dịch vụ nổi bật
    let left_button = document.getElementById("leftButton")
    let right_button = document.getElementById("rightButton");
    left_button.onclick = function(){
        if (indexOfServices===0){
            indexOfServices=2;
        }
        else {
            indexOfServices--;
        }
        changeServices(indexOfServices);
    }
    right_button.onclick = function(){
        if (indexOfServices===2){
            indexOfServices=0;
        }
        else {
            indexOfServices++;
        }
        changeServices(indexOfServices);
    }
    let submitButton = document.getElementById("submitButton");
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    let notRobotChecked = document.querySelector("#notRobot>div>input").checked;
    notRobotChecked = false;
    user.onchange = pass.onchange = function(){
        if (user.value!=="" && pass.value!==""){
            submitButton.href ="google.com";
        }
        else {
            submitButton.href="#";
        }
    }
    submitButton.onclick = function(){
        if (user.value===""){
            document.getElementById("announceForUser").classList.remove("hidden");
        }
        else {
            document.getElementById("announceForUser").classList.add("hidden");
        }
        if (pass.value===""){
            document.getElementById("announceForPass").classList.remove("hidden");
        }
        else {
            document.getElementById("announceForPass").classList.add("hidden");
        }
        notRobotChecked = document.querySelector("#notRobot>div>input").checked;
        if (!notRobotChecked){
            document.getElementById("announceForRobot").classList.remove("hidden");
        }
        else {
            document.getElementById("announceForRobot").classList.add("hidden");
        }
    }
    
}
setInterval(function(){
    if (indexOfServices!==2){
        indexOfServices++;
        changeServices(indexOfServices);
    }
    else {
        indexOfServices = 0;
        changeServices(indexOfServices);
    }
},8000);
let changeServices = function(i){
    // $(".services>img").animate({
    //     opacity: '0'
    // },1000);
    if (i===0){
        document.querySelector(".serviceName").innerText = "Du lịch & Đi lại";
        document.querySelector(".serviceDetails").innerText = "Dịch vụ hỗ trợ du lịch và đi lại với ưu đãi đặc biệt, bao gồm bảo hiểm du lịch toàn cầu và hỗ trợ khẩn cấp 24/7. Khách hàng cũng có thể dễ dàng quản lý chi tiêu và nhận các phần thưởng hấp dẫn khi sử dụng thẻ tín dụng của ngân hàng trong các chuyến đi.";
        document.querySelector(".services>img").src = "images/dich_vu_du_lich.jpg";
    }
    else if (i===1){
        document.querySelector(".serviceName").innerText = "Nạp điện thoại - Data";
        document.querySelector(".serviceDetails").innerText = "Dịch vụ hỗ trợ nạp tiền điện thoại và dữ liệu di động nhanh chóng, thuận tiện ngay trên ứng dụng ngân hàng. Khách hàng có thể dễ dàng thực hiện giao dịch và quản lý chi tiêu từ xa, không lo gián đoạn trong việc liên lạc và kết nối internet.";
        document.querySelector(".services>img").src = "images/dich_vu_nap_dt.jpg";
    }
    else if (i===2){
        document.querySelector(".serviceName").innerText = "Thanh toán hóa đơn";
        document.querySelector(".serviceDetails").innerText = "Dịch vụ thanh toán hóa đơn tiện lợi và nhanh chóng qua ứng dụng ngân hàng, giúp bạn dễ dàng quản lý các khoản chi tiêu hàng tháng mà không cần phải đến tận nơi. Với tính năng thanh toán tự động, bạn sẽ không bao giờ bỏ lỡ hạn chót và luôn đảm bảo hóa đơn được thanh toán đúng hạn.";
        document.querySelector(".services>img").src = "images/dich_vu_thanh_toan.jpg";
    }
    // $(".services>img").animate({
    //     opacity: '1'
    // },1000);
}