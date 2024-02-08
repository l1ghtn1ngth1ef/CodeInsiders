require.config({
    paths: {
        "customize-ui" : "/home/god/.config/Code - Insiders/User/globalStorage/iocave.customize-ui/modules",
        "monkey-generated" : "/home/god/.config/Code - Insiders/User/globalStorage/iocave.monkey-patch/modules"
    }
});

define(["monkey-generated/entrypoint-main", "customize-ui/title-bar-main-process", "customize-ui/utils"], function (){});