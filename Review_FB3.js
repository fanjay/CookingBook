//**MODEL
       //1.
       function initInput() {
            this.tokenID = "";
            this.ip = "";

            this.GetJSON = function () {
                return JSON.stringify(this);
            };
        }
        //2.
        function initInput() { };
        initInput.prototype = {
                tokenID: '',
                ip: '',
        initInput.prototype.callu = function () {
            return JSON.stringify(this.app);
            };
        }

        
        function settingOutput() {
            this.tokenID = getinitRe.tokenID;
            this.ip = "";
            this.captcha = ($('#inp_securityCode').val()),
            this.memberMasterVO =
            {
                verifyMemberName: ($('#username').val()),
                memberMobile:
                [{
                    mobileNumber: "",
                    Account: ($('#inp_Number').val())
                }]
            }
            this.GetJSON = function () {
                return JSON.stringify(this);
            };


        }

//}


//**Silver-AJAX
        //Tips:ONLY get info on using GET; others use POST (exchange data use POST*
        //Init BY POST
        function GetInit(inituserdata) {
            var $res;
            $.ajax({
                type: "POST",
                url: "test.url",
                async: false,
                cache: false,
                dataType: 'json',
                data: inituserdata,
                success: function (rdata) {
                    $res = rdata;

                }
            });
            return $res;
        }

        //Function BY GET
        function SubmitData(resultData) {
            var $res;
            $.ajax({
                type: "POST",
                url: "test.url",
                async: false,
                cache: false,
                dataType: 'json',
                data: resultData,
                success: function (rdata) {
                    $res = rdata;
                }
            });
            return $res;
        }

        //Bank select
        function GetSelectBank() {
            var $res;
            $.ajax({
                type: "GET",
                url: "common.url",
                async: false,
                cache: false,
                dataType: "text",
                success: function (rdata) {
                    //$res=rdata;
                    var position = rdata.indexOf('[');
                    var json_str = rdata.substring(position);
                    $res = JSON.parse(json_str);

                }
            });
            return $res;
        }
        //getBranchBankList
        function GetSelectChBank(getCode) {
            var $res;
            $.ajax({
                type: "GET",
                url: "chBank.url",
                async: false,
                cache: false,
                dataType: "text",
                success: function (rdata) {
                    var position = rdata.indexOf('[');
                    var json_str = rdata.substring(position);
                    $res = JSON.parse(json_str);
                    $.each($res, function (key, value) {
                        if (value.Name == getCode)
                            $("#position").append('<option>' + '</option>');
                    });
                }
            });
        }











//**UI

        //Print 8 code
        function transferPn() {

            var idx = document.getElementById('select_PnMonth').selectedIndex;
            var year = parseInt(1911) + parseInt($('#inp_PnYear').val());
            var day = ($("#select_PnDay").val());
            var Pnresult = year + paddingLeft(idx + 1, 2) + day;
            return Pnresult;
        }
        //Pading 0 
        function paddingLeft(str, lenght) {
            if (str.length >= lenght)
                return str;
            else
                return paddingLeft("0" + str, lenght);
        }

        //Getnew select Chlist
        function renew(index) {
            var getCode = VARIABLE_NAME;
            $("#SELECTED option").detach();
            var selectData02 = GetSelectChBank(getCode);
        }
        
        
        //jquery.function ex:$("#item").changeCssColorBack()
        jQuery.fn.changeCssColorBack = function () {
            this.removeClass('wMsg');
        };
        
        //jquery ex: String.isValidRegex(success,fail)
        String.prototype.isValidTaiwanPhone = function (successFunc, failFunc) {
        /// <summary>是否合格的台灣電話；successFunc為呼叫成功的函式,failFunc為失敗時呼叫函式</summary>
        /// <returns type="Boolean">是/否</returns>
        var mobilePattern = /^[0][1-9]{1,2}-([0-9]{7,8})+((#([0-9]){1,5}){0,1})$/;
        if(true)
                return false;
        }

