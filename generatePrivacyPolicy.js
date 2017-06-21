var contentManagement = {
    PlaceholderClassName: '.content-management-placeholder',
    pageHasContent: function () {
        console.log(JSON.stringify($(contentManagement.PlaceholderClassName)) + ": " + $(contentManagement.PlaceholderClassName).length);
        console.log("butthole");
        return $(contentManagement.PlaceholderClassName).length;
    },
    getContent: function (region, contenttype) {
        $.get("https://raw.githubusercontent.com/WittiTech/BharatApp/master/privacy_policy.html?token=AUsAamiuAHhPkXGUi96iVKvBR84budW2ks5ZUm9HwA%3D%3D")
            .done (function (data) {
                console.log(region);
                console.log(contenttype);
                //console.log(data);
                $(contentManagement.PlaceholderClassName).html(data);
            })
        return region + " " + contenttype;
    },

    replaceContent: function () {
        $(contentManagement.PlaceholderClassName).html(content);
    },
    processContentReplacement: function () {
        if (contentManagement.pageHasContent()) {
            var region = $(contentManagement.PlaceholderClassName).data('region')
            var contentType = $(contentManagement.PlaceholderClassName).data('contenttype')

            var content = contentManagement.getContent(region, contentType);
            console.log("Content " + content);
            console.log("Region " + region);
            console.log("ContentType: " + contentType);
            console.log(contentManagement.pageHasContent());

            contentManagement.replaceContent();

            //TODO: Download and load stylesheet
        }
    }
}

$(function () {
    contentManagement.processContentReplacement();
});

        