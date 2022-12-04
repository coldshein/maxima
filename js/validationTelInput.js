//Валидация
var telInput = $("#phone"),
    errorMsg = $("#error-msg"),
    validMsg = $("#valid-msg"),
    utilsScript = "/assets/files/jquery-plugins/international_telephone_input/utils.js";

telInput.intlTelInput({
    utilsScript: utilsScript
});

telInput.blur(function() {
    if ($.trim(telInput.val())) {
        if (telInput.intlTelInput("isValidNumber")) {
            validMsg.removeClass("hide");
        } else {
            telInput.addClass("error");
            errorMsg.removeClass("hide");
            validMsg.addClass("hide");
        }
    }
});

telInput.keydown(function() {
    telInput.removeClass("error");
    errorMsg.addClass("hide");
    validMsg.addClass("hide");
});

//Показать страну пользователя
$("#phone-ip").intlTelInput({
    defaultCountry: "auto",
    geoIpLookup: function(callback) {
        $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
    utilsScript: utilsScript
});

var input = $("#phone-nn"),
    output = $("#output-nn");

input.intlTelInput({
    nationalMode: true,
    utilsScript: utilsScript
});
input.on("keyup change", function() {
    var intlNumber = input.intlTelInput("getNumber");
    if (intlNumber) {
        output.text("Международный: " + intlNumber);
    } else {
        output.text("Пожалуйста, введите номер ниже");
    }
});

//Синхронизация стран
var countryData = $.fn.intlTelInput.getCountryData(),
    telInput = $("#phone-country"),
    addressDropdown = $("#address-country");

telInput.intlTelInput({
    utilsScript: utilsScript
});

$.each(countryData, function(i, country) {
    addressDropdown.append($("<option></option>").attr("value", country.iso2).text(country.name));
});

telInput.change(function() {
    var countryCode = telInput.intlTelInput("getSelectedCountryData").iso2;
    addressDropdown.val(countryCode);
});

telInput.change();

addressDropdown.change(function() {
    var countryCode = $(this).val();
    telInput.intlTelInput("selectCountry", countryCode);
});


//Изменить данные о стране
var countryData = $.fn.intlTelInput.getCountryData();
$.each(countryData, function(i, country) {
    country.name = country.name.replace(/.+\((.+)\)/,"$1");
});
$("#phone-country-data").intlTelInput({
    utilsScript: utilsScript
});

//Скрытый инпут
$("#phone-with-hidden").intlTelInput({
    utilsScript: utilsScript
});

$(".intlTelInput").submit(function() {
    $("#intlTelInputHidden").val($("#phone-with-hidden").intlTelInput("getNumber"));
});