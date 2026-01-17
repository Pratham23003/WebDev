function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
let closureFn = counter();
closureFn();
closureFn();
closureFn();
let closureFn2 = counter();
closureFn2();
closureFn2();
closureFn2();
closureFn2();
closureFn2();