
    $(function () {
        ShowMap('113.54143,22.274386', 'jQuery插件库', '杭州瑞壹网络科技有限公司', '021-888888888', '021-888888888', '20');
    })
    function getInfo(id) {
        $.ajax({
            type: "POST",
            url: "WebUserControl/Contact/GetInfo.ashx",
            cache: false,
            async: false,
            data: { ID: id },
            success: function (data) {
                data = eval(data);
                var length = data.length;
                if (length > 0) {
                    ShowMap(data[0]["Image"], data[0]["NewsTitle"], data[0]["Address"], data[0]["Phone"], data[0]["NewsTags"], data[0]["NewsNum"]);
                }
            }
        });
    }
    function ShowMap(zuobiao, name, addrsee, phone, chuanzhen, zoom) {
        var arrzuobiao = zuobiao.split(',');
        var map = new BMap.Map("allmap");
        map.centerAndZoom(new BMap.Point(arrzuobiao[0], arrzuobiao[1]), zoom);
        map.addControl(new BMap.NavigationControl());
        var marker = new BMap.Marker(new BMap.Point(arrzuobiao[0], arrzuobiao[1]));
        map.addOverlay(marker);
        var infoWindow = new BMap.InfoWindow('<p style="color: #bf0008;font-size:14px;">地址：' + addrsee + '</p>');
        marker.addEventListener("click", function () {
            this.openInfoWindow(infoWindow);
        });
        marker.openInfoWindow(infoWindow);
    }

