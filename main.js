// BÀI 1: Quản lý tuyển sinh

var btnTinhDiem = document.getElementById('btnTinhDiem');

btnTinhDiem.onclick = function(){
    var diemChuan = +document.getElementById('diemChuan').value;
    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = +document.getElementById('doiTuong').value;
    

    var mon1 = +document.getElementById('mon1').value;
    var mon2 = +document.getElementById('mon2').value;
    var mon3 = +document.getElementById('mon3').value;

    var pTinhDiem = document.getElementById('pTinhDiem');

    function select1(){
        var selectKv;
        if(khuVuc === 'a'){
            selectKv = 2
        }else if(khuVuc === 'b'){
            selectKv = 1
        }else if(khuVuc === 'c'){
            selectKv = 0.5
        }
        return selectKv
    }
    var ketQua1 = select1();

    function select2(){
        var sldoiTuong;
        if(doiTuong === 1){
            sldoiTuong = 2.5
        } else if(doiTuong === 2){
            sldoiTuong = 1.5
        }if(doiTuong === 3){
            sldoiTuong = 1
        }
        return sldoiTuong
    }
    var ketQua2 = select2();

    // function ketQua (id, value1, value2,value3){
    //     var kQ1 = 0;
    //     var kQ2 = 0;

    //     if(id == value1){
    //         kQ1 = 2
    //         kQ2 = 2.5
    //     }else if(id == value2){
    //         kQ1 = 1
    //         kQ2 = 1.5
    //     }else if(id == value3){
    //         kQ1 = 0.5
    //         kQ2 = 1
            
    //     }
    //     return kQ1 && kQ2
         

    // }

    // var ketQua1 = ketQua('khuVuc', 'a', 'b', 'c')
    // var ketQua2 = ketQua('doiTuong', 1, 2, 3)




    var total = mon1 + mon2 + mon3 + ketQua1 + ketQua2 ;

    if(mon1 === 0|| mon2 === 0|| mon3 === 0){
        pTinhDiem.innerHTML = 'Bạn tạch vì có môn bằng 0đ'
        
    }
    else if(total >= diemChuan){
        pTinhDiem.innerHTML = total +' ' + 'Chúc mừng bạn đã Đậu'
    }else if(total < diemChuan){
        pTinhDiem.innerHTML = total +' ' + 'Bạn đã tạch'
    }else{
        pTinhDiem.innerHTML = 'không xác dịnh được điểm của bạn'
    }
}



// BÀI 2: TÍNH TIỀN ĐIỆN

var btnTinhTien = document.getElementById('btnTinhTien');
btnTinhTien.onclick = function () {
    var hoTen = document.getElementById('hoTen').value;
    var soKw = +document.getElementById('soKw').value;
    var pTinhTien = document.getElementById('pTinhTien');

  
    if(0 <soKw && soKw <= 50) {
        var tien = soKw * 500
        pTinhTien.innerHTML = `${hoTen}, số tiền: ${tien.toLocaleString()} VND`
    }else if(50 <soKw && soKw <= 100) {
        var tien = (((soKw - 50) * 650) + (50 * 500)).toLocaleString();
        pTinhTien.innerHTML = `${hoTen}, số tiền: ${tien} VND`
    }else if(100 <soKw && soKw <= 200) {
        var tien = (((soKw - 100) * 850) + (50 * 500) + (50 * 650)).toLocaleString();
        pTinhTien.innerHTML = `${hoTen}, số tiền: ${tien} VND`
    }else if(200 <soKw && soKw <= 350) {
        var tien = (((soKw - 200) * 1100) + (50 * 500) + (50 * 650) + (100 * 850)).toLocaleString();
        pTinhTien.innerHTML = `${hoTen}, số tiền: ${tien} VND`
    }else if(soKw > 350) {
        var tien = (((soKw - 350) * 1300) + (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100)).toLocaleString();
        pTinhTien.innerHTML = `${hoTen}, số tiền: ${tien} VND`
    } else {
        pTinhTien.innerHTML = 'không xác định được số tiền'
    }

}