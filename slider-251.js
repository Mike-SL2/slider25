//script is optimised for Microsoft Edge Version 119.0.2151.72 (Official build) (64-bit)
//files: slider-251.js (this), index.htm or slider-251.htm (v.9)
//code layout by Prettier v3.1.0 (https://prettier.io/playground/)
        let frame = document.querySelector(".picFrame");
        let images25 = ["1_admiral", "2_sochi", "3_patriotic"];
        let imgQuant = images25.length;
        // building begin (script-1)
        let crkBlk = document.querySelector(".crcBlk");
        let lnkBlk = document.querySelector(".links");
        let opnDiv = "<div class=";
        let circ = '"circ"';
        onClk = ' onclick="showpic(';
        let links = '"link"';
        let clsDiv = ')"></div>';
        for (let i = 0; i < imgQuant; i++) {
          //<div class="circ" onclick="showpic(i)"> </div>
          crkBlk.insertAdjacentHTML(
            "beforeend",
            `${opnDiv}${circ}${onClk}${i}${clsDiv}`,
          );
          //<div class="link" onclick="showpic(i)"></div>
          lnkBlk.insertAdjacentHTML(
            "beforeend",
            `${opnDiv}${links}${onClk}${i}${clsDiv}`,
          );
        }
        // building   end (script-1)
        imgQuant--;
        let prefx25 = '<img src="img/';
        let pstfx25 = '.png" alt="Interior design view" class="pic">';
        let ActClr = "white";
        let i25 = 0;
        let LnkActClr = "#E3B873";
        let FWD = document.getElementById("BtnFwd");
        let BWD = document.getElementById("BtnBckwrd");
        let crk = document.querySelectorAll(".circ");
        let lnk = document.querySelectorAll(".link");
        let descript = document.querySelectorAll(".Desc");

        let names = [
          "Rostov-on-Don, Admiral",
          "Sochi Thieves",
          "Rostov-on-Don Patriotic",
        ];
        let meter = ["81", "82", "83"];
        let terms = ["3.5", "4.5", "5.5"];
        names.forEach(function (item, idx, arr) {
          lnk[idx].innerHTML = item;
        });

        function showpic(n) {
          frame.innerHTML = `${prefx25}${images25[n]}${pstfx25}`;
          i25 = n;
          crk.forEach(function (item, idx) {
            if (idx !== n) {
              item.style.background = "";
            }
          });
          lnk.forEach(function (item, idx) {
            if (idx !== n) {
              item.style.color = "";
            }
          });
          descript[0].innerHTML = `${names[n]}`;
          descript[1].innerHTML = `${terms[n]} months`;
          descript[2].innerHTML = `${meter[n]} m<sup>2</sup>`;
          lnk[n].style.color = `${LnkActClr}`;
          crk[n].style.background = `${ActClr}`;
        }

        function plus() {
          i25++;
          if (i25 > imgQuant) {
            i25 = 0;
          }
          showpic(i25);
        }
        FWD.onclick = plus;

        function minus() {
          i25--;
          if (i25 < 0) {
            i25 = imgQuant;
          }
          showpic(i25);
        }
        BWD.onclick = minus;
        showpic(i25);