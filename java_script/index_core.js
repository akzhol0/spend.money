window.addEventListener('load', function() {
    setTimeout(() => {
        document.querySelector('.load-page').removeAttribute('id', 'load-page');
        document.querySelector('.wrapper').style['display'] = 'flex';
        document.querySelector('.load-page').style['display'] = 'none';
    }, 3000);
});

let money = 150000000000, money_dc = 150000000000;

let counter = ['null', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let sell_btn1 = document.getElementById('s1');
let sell_btn2 = document.getElementById('s2');
let sell_btn3 = document.getElementById('s3');
let sell_btn4 = document.getElementById('s4');
let sell_btn5 = document.getElementById('s5');
let sell_btn6 = document.getElementById('s6');
let sell_btn7 = document.getElementById('s7');
let sell_btn8 = document.getElementById('s8');
let sell_btn9 = document.getElementById('s9');
let sell_btn10 = document.getElementById('s10');
let sell_btn11 = document.getElementById('s11');
let sell_btn12 = document.getElementById('s12');
let sell_btn13 = document.getElementById('s13');
let sell_btn14 = document.getElementById('s14');
let sell_btn15 = document.getElementById('s15');
let sell_btn16 = document.getElementById('s16');
let sell_btn17 = document.getElementById('s17');
let sell_btn18 = document.getElementById('s18');

let buy_btn1 = document.getElementById('b1');
let buy_btn2 = document.getElementById('b2');
let buy_btn3 = document.getElementById('b3');
let buy_btn4 = document.getElementById('b4');
let buy_btn5 = document.getElementById('b5');
let buy_btn6 = document.getElementById('b6');
let buy_btn7 = document.getElementById('b7');
let buy_btn8 = document.getElementById('b8');
let buy_btn9 = document.getElementById('b9');
let buy_btn10 = document.getElementById('b10');
let buy_btn11 = document.getElementById('b11');
let buy_btn12 = document.getElementById('b12');
let buy_btn13 = document.getElementById('b13');
let buy_btn14 = document.getElementById('b14');
let buy_btn15 = document.getElementById('b15');
let buy_btn16 = document.getElementById('b16');
let buy_btn17 = document.getElementById('b17');
let buy_btn18 = document.getElementById('b18');

function interv() {
    document.querySelector('.money-counter').textContent = `${money} $`;

    if (money <= 0) {
        document.querySelector('.money-counter').textContent = '0 $, You spent it all!';
        buy_btn1.setAttribute('disabled', true);
        buy_btn2.setAttribute('disabled', true);
        buy_btn3.setAttribute('disabled', true);
        buy_btn4.setAttribute('disabled', true);
        buy_btn5.setAttribute('disabled', true);
        buy_btn6.setAttribute('disabled', true);
        buy_btn7.setAttribute('disabled', true);
        buy_btn8.setAttribute('disabled', true);
        buy_btn9.setAttribute('disabled', true);
        buy_btn10.setAttribute('disabled', true);
        buy_btn11.setAttribute('disabled', true);
        buy_btn12.setAttribute('disabled', true);
        buy_btn13.setAttribute('disabled', true);
        buy_btn14.setAttribute('disabled', true);
        buy_btn15.setAttribute('disabled', true);
        buy_btn16.setAttribute('disabled', true);
        buy_btn17.setAttribute('disabled', true);
        buy_btn18.setAttribute('disabled', true);
    } else if (money > 0) {
        buy_btn1.removeAttribute('disabled');
        buy_btn2.removeAttribute('disabled');
        buy_btn3.removeAttribute('disabled');
        buy_btn4.removeAttribute('disabled');
        buy_btn5.removeAttribute('disabled');
        buy_btn6.removeAttribute('disabled');
        buy_btn7.removeAttribute('disabled');
        buy_btn8.removeAttribute('disabled');
        buy_btn9.removeAttribute('disabled');
        buy_btn10.removeAttribute('disabled');
        buy_btn11.removeAttribute('disabled');
        buy_btn12.removeAttribute('disabled');
        buy_btn13.removeAttribute('disabled');
        buy_btn14.removeAttribute('disabled');
        buy_btn15.removeAttribute('disabled');
        buy_btn16.removeAttribute('disabled');
        buy_btn17.removeAttribute('disabled');
        buy_btn18.removeAttribute('disabled');
    }

    if (money < 2000000000) {
        buy_btn18.setAttribute('disabled', true);
    } else if (money >= 2000000000) {
        buy_btn18.removeAttribute('disabled');
    }

    if (money < 1500000000) {
        buy_btn17.setAttribute('disabled', true);
    } else if (money >= 1500000000) {
        buy_btn17.removeAttribute('disabled');
    }

    if (money < 1000000000) {
        buy_btn16.setAttribute('disabled', true);
    } else if (money >= 1000000000) {
        buy_btn16.removeAttribute('disabled');
    }

    if (money < 950000000) {
        buy_btn15.setAttribute('disabled', true);
    } else if (money >= 950000000) {
        buy_btn15.removeAttribute('disabled');
    }

    if (money < 256000000) {
        buy_btn14.setAttribute('disabled', true);
    } else if (money >= 256000000) {
        buy_btn14.removeAttribute('disabled');
    }

    if (money < 30000000) {
        buy_btn13.setAttribute('disabled', true);
    } else if (money >= 30000000) {
        buy_btn13.removeAttribute('disabled');
    }

    if (money < 15000000) {
        buy_btn12.setAttribute('disabled', true);
    } else if (money >= 15000000) {
        buy_btn12.removeAttribute('disabled');
    }

    if (money < 1700000) {
        buy_btn11.setAttribute('disabled', true);
    } else if (money >= 1700000) {
        buy_btn11.removeAttribute('disabled');
    }

    if (money < 900000) {
        buy_btn10.setAttribute('disabled', true);
    } else if (money >= 900000) {
        buy_btn10.removeAttribute('disabled');
    }

    if (money < 250000) {
        buy_btn9.setAttribute('disabled', true);
    } else if (money >= 250000) {
        buy_btn9.removeAttribute('disabled');
    }

    if (money < 10000) {
        buy_btn8.setAttribute('disabled', true);
    } else if (money >= 10000) {
        buy_btn8.removeAttribute('disabled');
    }

    if (money < 1100) {
        buy_btn7.setAttribute('disabled', true);
    } else if (money >= 1100) {
        buy_btn7.removeAttribute('disabled');
    }

    if (money < 900) {
        buy_btn6.setAttribute('disabled', true);
    } else if (money >= 900) {
        buy_btn6.removeAttribute('disabled');
    }

    if (money < 450) {
        buy_btn5.setAttribute('disabled', true);
    } else if (money >= 450) {
        buy_btn5.removeAttribute('disabled');
    }

    if (money < 400) {
        buy_btn4.setAttribute('disabled', true);
    } else if (money >= 400) {
        buy_btn4.removeAttribute('disabled');
    }

    if (money < 10) {
        buy_btn3.setAttribute('disabled', true);
    } else if (money >= 10) {
        buy_btn3.removeAttribute('disabled');
    }

    if (money < 3) {
        buy_btn2.setAttribute('disabled', true);
    } else if (money >= 3) {
        buy_btn2.removeAttribute('disabled');
    }

    if (money < 2) {
        buy_btn1.setAttribute('disabled', true);
    } else if (money >= 2) {
        buy_btn1.removeAttribute('disabled');
    }

    for (let i = 1; i < counter.length; i++) {
        document.querySelector('.counter' + i).textContent = counter[i];
    }

    let item_counter = counter[1] + counter[2] + counter[3] + counter[4] + counter[5] + counter[6] + counter[7]
    + counter[8] + counter[9] + counter[10] + counter[11] + counter[12] + counter[13] + counter[14] + counter[15]
    + counter[16] + counter[17] + counter[18];

    let left_money = money_dc - money;
    document.querySelector('.end').textContent = `You bought ${item_counter} item, ${left_money}$ spent`;
}
setInterval(interv, 100);   

const model = ['s1', 'b1' ,'s2', 'b2' ,'s3', 'b3' ,'s4', 'b4' ,'s5', 'b5' ,'s6', 'b6' ,'s7', 'b7' ,'s8', 'b8' ,
's9', 'b9' ,'s10', 'b10' ,'s11', 'b11' ,'s12', 'b12' ,'s13', 'b13' ,'s14', 'b14' ,'s15', 'b15' ,'s16', 'b16' ,
's17', 'b17' ,'s18', 'b18'];

document.querySelector('.main-container').onclick = (event) => {
    const key = event.target.value;

    if (key == model[0]) {
        money+=2;
        counter[1]--;
        if (counter[1] <= 0) {
            sell_btn1.setAttribute('disabled', true);
        } else if (counter[1] > 0) {
            sell_btn1.removeAttribute('disabled');
        }
    } else if (key == model[1]) {
        money-=2;
        counter[1] ++;
        if (counter[1] <= 0) {
            sell_btn1.setAttribute('disabled', true);
        } else if (counter[1]  > 0) {
            sell_btn1.removeAttribute('disabled');
        }
    }
    
    if (key == model[2]) {
        money+=3;
        counter[2]--;
        if (counter[2] <= 0) {
            sell_btn2.setAttribute('disabled', true);
        } else if (counter[2] > 0) {
            sell_btn2.removeAttribute('disabled');
        }
    } else if (key == model[3]) {
        money-=3;
        counter[2]++;
        if (counter[2] <= 0) {
            sell_btn2.setAttribute('disabled', true);
        } else if (counter[2] > 0) {
            sell_btn2.removeAttribute('disabled');
        }
    }
    
    if (key == model[4]) {
        money+=10;
        counter[3]--;
        if (counter[3] <= 0) {
            sell_btn3.setAttribute('disabled', true);
        } else if (counter[3] > 0) {
            sell_btn3.removeAttribute('disabled');
        }
    } else if (key == model[5]) {
        money-=10;
        counter[3]++;
        if (counter[3] <= 0) {
            sell_btn3.setAttribute('disabled', true);
        } else if (counter[3] > 0) {
            sell_btn3.removeAttribute('disabled');
        }
    }

    if (key == model[6]) {
        money+=400;
        counter[4]--;
        if (counter[4] <= 0) {
            sell_btn4.setAttribute('disabled', true);
        } else if (counter[4] > 0) {
            sell_btn4.removeAttribute('disabled');
        }
    } else if (key == model[7]) {
        money-=400;
        counter[4] ++;
        if (counter[4] <= 0) {
            sell_btn4.setAttribute('disabled', true);
        } else if (counter[4]  > 0) {
            sell_btn4.removeAttribute('disabled');
        }
    }

    if (key == model[8]) {
        money+=450;
        counter[5]--;
        if (counter[5] <= 0) {
            sell_btn5.setAttribute('disabled', true);
        } else if (counter[5] > 0) {
            sell_btn5.removeAttribute('disabled');
        }
    } else if (key == model[9]) {
        money-=450;
        counter[5] ++;
        if (counter[5] <= 0) {
            sell_btn5.setAttribute('disabled', true);
        } else if (counter[5]  > 0) {
            sell_btn5.removeAttribute('disabled');
        }
    }

    if (key == model[10]) {
        money+=900;
        counter[6]--;
        if (counter[6] <= 0) {
            sell_btn6.setAttribute('disabled', true);
        } else if (counter[6] > 0) {
            sell_btn6.removeAttribute('disabled');
        }
    } else if (key == model[11]) {
        money-=900;
        counter[6] ++;
        if (counter[6] <= 0) {
            sell_btn6.setAttribute('disabled', true);
        } else if (counter[6]  > 0) {
            sell_btn6.removeAttribute('disabled');
        }
    }

    if (key == model[12]) {
        money+=1100;
        counter[7]--;
        if (counter[7] <= 0) {
            sell_btn7.setAttribute('disabled', true);
        } else if (counter[7] > 0) {
            sell_btn7.removeAttribute('disabled');
        }
    } else if (key == model[13]) {
        money-=1100;
        counter[7] ++;
        if (counter[7] <= 0) {
            sell_btn7.setAttribute('disabled', true);
        } else if (counter[7]  > 0) {
            sell_btn7.removeAttribute('disabled');
        }
    }

    if (key == model[14]) {
        money+=10000;
        counter[8]--;
        if (counter[8] <= 0) {
            sell_btn8.setAttribute('disabled', true);
        } else if (counter[8] > 0) {
            sell_btn8.removeAttribute('disabled');
        }
    } else if (key == model[15]) {
        money-=10000;
        counter[8] ++;
        if (counter[8] <= 0) {
            sell_btn8.setAttribute('disabled', true);
        } else if (counter[8]  > 0) {
            sell_btn8.removeAttribute('disabled');
        }
    }

    if (key == model[16]) {
        money+=250000;
        counter[9]--;
        if (counter[9] <= 0) {
            sell_btn9.setAttribute('disabled', true);
        } else if (counter[9] > 0) {
            sell_btn9.removeAttribute('disabled');
        }
    } else if (key == model[17]) {
        money-=250000;
        counter[9] ++;
        if (counter[9] <= 0) {
            sell_btn9.setAttribute('disabled', true);
        } else if (counter[9]  > 0) {
            sell_btn9.removeAttribute('disabled');
        }
    }

    if (key == model[18]) {
        money+=900000;
        counter[10]--;
        if (counter[10] <= 0) {
            sell_btn10.setAttribute('disabled', true);
        } else if (counter[10] > 0) {
            sell_btn10.removeAttribute('disabled');
        }
    } else if (key == model[19]) {
        money-=900000;
        counter[10] ++;
        if (counter[10] <= 0) {
            sell_btn10.setAttribute('disabled', true);
        } else if (counter[10]  > 0) {
            sell_btn10.removeAttribute('disabled');
        }
    }

    if (key == model[20]) {
        money+=1700000;
        counter[11]--;
        if (counter[11] <= 0) {
            sell_btn11.setAttribute('disabled', true);
        } else if (counter[11] > 0) {
            sell_btn11.removeAttribute('disabled');
        }
    } else if (key == model[21]) {
        money-=1700000;
        counter[11] ++;
        if (counter[11] <= 0) {
            sell_btn11.setAttribute('disabled', true);
        } else if (counter[11]  > 0) {
            sell_btn11.removeAttribute('disabled');
        }
    }

    if (key == model[22]) {
        money+=15000000;
        counter[12]--;
        if (counter[12] <= 0) {
            sell_btn12.setAttribute('disabled', true);
        } else if (counter[12] > 0) {
            sell_btn12.removeAttribute('disabled');
        }
    } else if (key == model[23]) {
        money-=15000000;
        counter[12] ++;
        if (counter[12] <= 0) {
            sell_btn12.setAttribute('disabled', true);
        } else if (counter[12]  > 0) {
            sell_btn12.removeAttribute('disabled');
        }
    }

    if (key == model[24]) {
        money+=30000000;
        counter[13]--;
        if (counter[13] <= 0) {
            sell_btn13.setAttribute('disabled', true);
        } else if (counter[13] > 0) {
            sell_btn13.removeAttribute('disabled');
        }
    } else if (key == model[25]) {
        money-=30000000;
        counter[13] ++;
        if (counter[13] <= 0) {
            sell_btn13.setAttribute('disabled', true);
        } else if (counter[13]  > 0) {
            sell_btn13.removeAttribute('disabled');
        }
    }

    if (key == model[26]) {
        money+=256000000;
        counter[14]--;
        if (counter[14] <= 0) {
            sell_btn14.setAttribute('disabled', true);
        } else if (counter[14] > 0) {
            sell_btn14.removeAttribute('disabled');
        }
    } else if (key == model[27]) {
        money-=256000000;
        counter[14] ++;
        if (counter[14] <= 0) {
            sell_btn14.setAttribute('disabled', true);
        } else if (counter[14]  > 0) {
            sell_btn14.removeAttribute('disabled');
        }
    }

    if (key == model[28]) {
        money+=950000000;
        counter[15]--;
        if (counter[15] <= 0) {
            sell_btn15.setAttribute('disabled', true);
        } else if (counter[15] > 0) {
            sell_btn15.removeAttribute('disabled');
        }
    } else if (key == model[29]) {
        money-=950000000;
        counter[15] ++;
        if (counter[15] <= 0) {
            sell_btn15.setAttribute('disabled', true);
        } else if (counter[15]  > 0) {
            sell_btn15.removeAttribute('disabled');
        }
    }

    if (key == model[30]) {
        money+=1000000000;
        counter[16]--;
        if (counter[16] <= 0) {
            sell_btn16.setAttribute('disabled', true);
        } else if (counter[16] > 0) {
            sell_btn16.removeAttribute('disabled');
        }
    } else if (key == model[31]) {
        money-=1000000000;
        counter[16] ++;
        if (counter[16] <= 0) {
            sell_btn16.setAttribute('disabled', true);
        } else if (counter[16]  > 0) {
            sell_btn16.removeAttribute('disabled');
        }
    }

    if (key == model[32]) {
        money+=1500000000;
        counter[17]--;
        if (counter[17] <= 0) {
            sell_btn17.setAttribute('disabled', true);
        } else if (counter[17] > 0) {
            sell_btn17.removeAttribute('disabled');
        }
    } else if (key == model[33]) {
        money-=1500000000;
        counter[17]++;
        if (counter[17] <= 0) {
            sell_btn17.setAttribute('disabled', true);
        } else if (counter[17]  > 0) {
            sell_btn17.removeAttribute('disabled');
        }
    }

    if (key == model[34]) {
        money+=2000000000;
        counter[18]--;
        if (counter[18] <= 0) {
            sell_btn18.setAttribute('disabled', true);
        } else if (counter[18] > 0) {
            sell_btn18.removeAttribute('disabled');
        }
    } else if (key == model[35]) {
        money-=2000000000;
        counter[18]++;
        if (counter[18] <= 0) {
            sell_btn18.setAttribute('disabled', true);
        } else if (counter[18]  > 0) {
            sell_btn18.removeAttribute('disabled');
        }
    }
};





