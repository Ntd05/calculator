
function Tong(s) {
    const x = s.toString().replace('×','*');
    const y = x.toString().replace('÷','/');

    console.log(eval(y));
};
Tong("2+2");
/**
 * Phải chạy file ở đúng thư mục mới được nhé. 
 * Em đang để code ở trong folder js nên là phải node js/test.js
 * Chứ còn nếu node test.js thì nó không chạy đâu.
 * Anh phải qua đèo Kim Đức đi có việc chút đây
 */