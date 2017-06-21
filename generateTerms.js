//My alterations

var contentManagement = {
    PlaceholderClassName: '.content-management-placeholder',
    pageHasContent: function () {
        //I'm confused about $(contentManagement.PlaceholderClassName).length >> What is this doing exactly??
        console.log(JSON.stringify($(contentManagement.PlaceholderClassName)) + ": " + $(contentManagement.PlaceholderClassName).length);
        console.log("butthole");
        return $(contentManagement.PlaceholderClassName).length;
    },
    getContent: function (region, contenttype) {
        //How do you grab specific Terms or Privacy Policy information from correct region based on meta data (region, contenttype)?
        //Ask Joe ==> Need to create it at least (only GB Terms and Privacy policy info available to me)
        $.get("https://raw.githubusercontent.com/WittiTech/BharatApp/master/terms.html?token=AUsAap06-XFzywU0A5dpbigYFy_Bhtfyks5ZUcx0wA%3D%3D")
            .done (function (data) {
                console.log(region);
                console.log(contenttype);
                //console.log(data);

                $(contentManagement.PlaceholderClassName.html(data);
            })
            return region + " " + contenttype;
    },

    replaceContent: function (content) {
        $(contentManagement.PlaceholderClassName).html(content);
    },
    processContentReplacement: function () {
        if (contentManagement.pageHasContent()) {
            var region = $(contentManagement.PlaceholderClassName).data('region')
            var contentType = $(contentManagement.PlaceholderClassName).data('contenttype')

            //gets content based on what region the content needs to be in (US, GB, Canada) and what the content type is (either 'Terms' or 'Privacy Policy')
            //Need to have templates for US, GB, Canada, and the Terms and Privacy Policy
            //DOM injection will depend on these parameters ^
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