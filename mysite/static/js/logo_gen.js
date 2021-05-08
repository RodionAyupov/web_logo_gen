function hide (elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';
  }
}

function drawCircle(ctx, x, y, star_size, color_state) {
        if(color_state==1){ctx.fillStyle = "blue";}
        else {ctx.fillStyle = "black"; star_size+=1;}
        ctx.beginPath();
        ctx.arc(x, y, star_size, 0, 2 * Math.PI);
        ctx.fill();
}

function LogoGenerator(){
//    alert(text);
    hide(document.getElementById('welcome-text'));
    var text = document.getElementById("text").value;
//    alert(document.getElementById("text").value);
    var canvas = document.getElementById("myCanvas");
    canvas.width = window.innerWidth; //document.width is obsolete
    canvas.height = window.innerHeight*1; //document.height is obsolete
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var ctx = canvas.getContext("2d");
    var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);

//    alert(PrepareText('tinkoff.ru'));
    var new_fig = CreateBankFigure();
    var prepared_text = PrepareText('tinkoff.ru');
    PrintLogo(ctx, 10, new_fig, 40, 0.03, canvasWidth, canvasHeight, 5, prepared_text);
//    window.setInterval(function(){
//      drawCircle(ctx, Math.random()*344, Math.random()*344, 4, 1);
//    }, 500 / 1); // 25 times per second

}

function PrepareText(text){
    var lentxt = text.length;
    var minimum_counter = 0;

    var crc32 = b_crc32(text);
    var crc32_sum = SumDigits(crc32);

    while ((lentxt+minimum_counter)%10 != 0){minimum_counter += 1;}
    for (var i = 0; i < minimum_counter; i++) {text += " ";}

    var texts = get_N_parts(text, 10);
    var codes = [];
    for (var j = 0; j < texts.length; j++) {codes.push(modulator(texts[j]));}

    var pre_crc_blank='';
    for (var k = 0; k < (texts[0].length-crc32_sum.toString().length); k++) {pre_crc_blank += '0';}
    var crc_code = modulator(pre_crc_blank+crc32_sum.toString());

    var output = [codes, crc_code]
    return output;
}

class Leds_Positions {
  constructor(positions) {
    //positions - массив вида [[xa,ya],[xb,yb],....,[xz,yz]]
    // с координатами точек определенного типа (service, data, crc или contour)
    this.positions = positions;
  }
}

class Figure {
  constructor(data_leds, service_leds, crc_leds, contour_leds) {
    //класс-хранилище координат светодиодов всех типов для конкретной фигуры
    this.data_leds = data_leds;
    this.service_leds = service_leds;
    this.crc_leds = crc_leds;
    this.contour_leds = contour_leds;
  }
}

function CreateBankFigure(){
    var delta=500;
    data_leds_bank = new Leds_Positions([[139, 693], //s1
                                         [105, 580], //s2
                                         [105, 461], //s3
                                         [139, 349], //s4
                                         [202, 250], //s5
                                         [289, 172], //s6
                                         [395, 121], //s7
                                         [628, 121], //s8
                                         [738, 172], //s9
                                         [832, 250]]); //s10
    for (var i=0; i<data_leds_bank.positions.length; i++){
        data_leds_bank.positions[i][0]+=-delta;
        data_leds_bank.positions[i][1]+=-delta;
    }

    service_leds_bank = new Leds_Positions([[684, 900], //s1
                                            [787, 834], //s2
                                            [569, 936]]); //s10
    for (var i=0; i<service_leds_bank.positions.length; i++){
        service_leds_bank.positions[i][0]+=-delta;
        service_leds_bank.positions[i][1]+=-delta;
    }


    crc_leds_bank = new Leds_Positions([[943, 461], //s1
                                        [943, 580]]); //s10
    for (var i=0; i<crc_leds_bank.positions.length; i++){
        crc_leds_bank.positions[i][0]+=-delta;
        crc_leds_bank.positions[i][1]+=-delta;
    }

    contour_leds_bank = new Leds_Positions([[202, 792], //-5
                                            [243, 834], //-4
                                            [289, 870], //-3
                                            [341, 900], //-2
                                            [395, 922], //-1
                                            [453, 936], //0
                                            [167, 746], //1
                                            [118, 637], //3
                                            [100, 521], //5
                                            [118, 405], //7
                                            [167, 297], //9
                                            [243, 208], //11
                                            [341, 143], //13
                                            [453, 106], //15
                                            [512, 100], //16
                                            [569, 106], //17
                                            [684, 143], //19
                                            [787, 208], //21
                                            [870, 297], //23
                                            [902, 349], //24
                                            [926, 405], //25
                                            [953, 521], //27
                                            [926, 637], //29
                                            [902, 693], //30
                                            [870, 746], //31
                                            [832, 792], //32
                                            [738, 870], //34
                                            [628, 922], //36
                                            [512, 942], //38
                                            [289, 461], //s9
                                            [335, 461], //s9
                                            [383, 357], //s9
                                            [383, 405], //s9
                                            [383, 461], //s9
                                            [383, 505], //s9
                                            [383, 542], //s9
                                            [383, 592], //s9
                                            [418, 461], //s9
                                            [453, 461], //s9
                                            [485, 461], //s9
                                            [523, 461], //s9
                                            [523, 501], //s9
                                            [523, 542], //s9
                                            [523, 592], //s9
                                            [558, 461], //s9
                                            [598, 461], //s9
                                            [633, 461], //s9
                                            [670, 357], //s9
                                            [670, 405], //s9
                                            [670, 461], //s9
                                            [670, 501], //s9
                                            [670, 542], //s9
                                            [670, 592], //s9
                                            [718, 461], //s9
                                            [763, 461], //s9
                                            [289, 542], //s9
                                            [335, 542], //s9
                                            [718, 542], //s9
                                            [763, 542], //s9
                                            [395, 629], //s9
                                            [425, 653], //s9
                                            [453, 664], //s9
                                            [485, 653], //s9
                                            [510, 629], //s9
                                            [536, 629], //s9
                                            [558, 653], //s9
                                            [598, 663], //s9
                                            [637, 653], //s9
                                            [660, 629]]); //s10
    for (var i=0; i<contour_leds_bank.positions.length; i++){
        contour_leds_bank.positions[i][0]+=-delta;
        contour_leds_bank.positions[i][1]+=-delta;
    }

    bank_figure = new Figure(data_leds_bank, service_leds_bank, crc_leds_bank, contour_leds_bank);

    return bank_figure;
}

function PrintLogo(ctx, frequency, figure, size, scale, screen_width, screen_height, pointsize, prepared_text){
// PrintLogo(ctx, 10, CreateBankFigure(), 40, 0.02, canvasWidth, canvasHeight, 5, codes, crc_data)
    var codes = prepared_text[0];
    var crc_data = prepared_text[1];
    var time_period = 1000 / frequency;
    var height = screen_height;
    var width = screen_width;

    var result_step = (height * scale / size);
    var result_border = Math.ceil((width - height) / 2) + Math.ceil((height - result_step * size) / 2);
    var result_border_x = Math.ceil((width - height) / 2) + Math.ceil((height - result_step * size) / 2);
    var result_border_y = Math.ceil((height - result_step * size) / 2);

    //extracting leds data from figure
    var data_leds = figure.data_leds.positions;
    var service_leds = figure.service_leds.positions;
    var crc_leds = figure.crc_leds.positions;
    var contour_leds = figure.contour_leds.positions;

    //preparing service_leds
    var service_leds_transformed = [];
    for(var i=0;i<service_leds.length;i++){
       service_leds_transformed.push([service_leds[i][1]*result_step + result_border_x, service_leds[i][0]* result_step + result_border_y]);
    }
    service_leds = service_leds_transformed;

    //switch on contour_leds
    var contour_leds_transformed = [];
    for(var i=0;i<contour_leds.length;i++){
       contour_leds_transformed.push([contour_leds[i][1]*result_step + result_border_x, contour_leds[i][0]* result_step + result_border_y]);
    }
    contour_leds = contour_leds_transformed;

    for(var i=0;i<contour_leds.length;i++){drawCircle(ctx, contour_leds[i][0], contour_leds[i][1], pointsize, 1)}

    //switch on crc_leds - возможно нужно это будет отменить
    var crc_leds_transformed = [];
    for(var i=0;i<crc_leds.length;i++){
       crc_leds_transformed.push([crc_leds[i][1]*result_step + result_border_x, crc_leds[i][0]* result_step + result_border_y]);
    }
    crc_leds = crc_leds_transformed;

    for(var i=0;i<crc_leds.length;i++){drawCircle(ctx, crc_leds[i][0], crc_leds[i][1], pointsize, 1)}
    console.log('qwdwd');
    //далее цикл пока не будет нажата кнопка еще раз
    var previous_text = document.getElementById("text").value;
//    alert('previous_text: '+previous_text);
    var text = previous_text;
    console.log(text);
    if (text==previous_text){
        var d2_count=0;
        var crc_state=0;
        var state=0;
        var row=0;
        var col=0;
        var start_time=0;
        var finish_time=0;
        var d = new Date();
        var crc_data_counter = -1;
        var i=0;
        crc_data_counter+=1;
        var k=0;
//        console.log(k);
        var status = false;

        function DataPrint(){
            drawCircle(ctx, service_leds[1][0], service_leds[1][1], pointsize, 1);
            drawCircle(ctx, service_leds[2][0], service_leds[2][1], pointsize, 1);
            var flag=false;
            function Flag(){
                myInterval = setInterval(()=>{
                          DataPrint()
                        }, time_period);
                clearInterval(myDelay);
            }
            flag=false;
            crc_state = crc_data[k];

            drawCircle(ctx, crc_leds[1][0], crc_leds[1][1], pointsize, crc_state);
            drawCircle(ctx, crc_leds[0][0], crc_leds[0][1], pointsize, crc_state);

            for (var j=0; j<codes.length;j++){
                state = codes[j][k];
//                    console.log('state: '+state);
//                    console.log('codes: '+codes);

                row = data_leds[j][1] * result_step + result_border_x;
                col = data_leds[j][0] * result_step + result_border_y;
                drawCircle(ctx, row, col, pointsize, state); //возможно надо рисовать в конце единовременно

            }
            drawCircle(ctx, service_leds[0][0], service_leds[0][1], pointsize, d2_count); //возможно надо рисовать в конце единовременно
            d2_count += 1;
            if (d2_count == 2){d2_count = 0;}

            console.log('k: '+k+'  i: '+i);
            if (k==7){
                k=0;
                drawCircle(ctx, service_leds[1][0], service_leds[1][1], pointsize, 0);
                drawCircle(ctx, service_leds[2][0], service_leds[2][1], pointsize, 0);


                clearInterval(myInterval);
                text = document.getElementById("text").value;
                if (text==previous_text){
                    var myDelay = setInterval(()=>{
                              Flag()
                            }, time_period*5);
                }

//                if (i==codes[0].length-1){
//                    clearInterval(myInterval);
//                }

            }
            k+=1;
        }

        var myInterval = setInterval(()=>{
                          DataPrint()
                        }, time_period);

            //ждем time_period
//            sleep(time_period);

        //ждем time_period * 5
//        sleep(time_period*5);

    }
//
//
//
}

function SumDigits(number){
    var n = number,
        s = 0;
    while (n) {
        s += n % 10;
        n = Math.floor(n / 10);
    }
    return s;
}

var a_table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";
var b_table = a_table.split(' ').map(function(s){ return parseInt(s,16) });
function b_crc32 (str) {
    var crc = -1;
    for(var i=0, iTop=str.length; i<iTop; i++) {
        crc = ( crc >>> 8 ) ^ b_table[( crc ^ str.charCodeAt( i ) ) & 0xFF];
    }
    return (crc ^ (-1)) >>> 0;
};

function get_N_parts(text, N){
    var texts = [];
    var buf = '';
    var part_length = Math.ceil(text.length/N);
    for (var i = 0; i < N; i++) {
        for (var j = part_length*i; j < part_length*(i+1); j++) {buf += text.charAt(j);}
        texts.push(buf);
        buf = '';
    }
    return texts;
}

function modulator(input){
    var output='';
    for (var i = 0; i < input.length; i++) {
          output += (0b100000000 + input[i].charCodeAt(0)).toString(2).substring(1) + " ";
    }
    return output;
}