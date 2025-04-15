$(document).ready(function() {
    // 初始化表格
    var table = $('#results-table').DataTable({
        data: sampleData,
        columns: [
            { data: 'area' },
            { data: 'height' },
            { data: 'environment' },
            { data: 'capacity' },
            { 
                data: 'recommended_capacity',
                render: function(data, type, row) {
                    if (data === "專人協助") {
                        return '<span class="assistance-text">' + data + '</span>';
                    } else {
                        return '<span class="professional-text">' + data + '</span>';
                    }
                }
            },
            { 
                data: 'recommended_model',
                render: function(data, type, row) {
                    if (data === "專人協助") {
                        return '<span class="assistance-text">' + data + '</span>';
                    } else {
                        return data;
                    }
                }
            },
            {
                data: null,
                render: function(data, type, row) {
                    return '<button class="btn btn-sm btn-info view-details">查看詳情</button>';
                }
            }
        ],
        pageLength: 10,
        language: {
            "lengthMenu": "顯示 _MENU_ 筆資料",
            "zeroRecords": "沒有找到符合的資料",
            "info": "顯示第 _START_ 至 _END_ 筆資料，共 _TOTAL_ 筆",
            "infoEmpty": "顯示第 0 至 0 筆資料，共 0 筆",
            "infoFiltered": "(從 _MAX_ 筆資料中過濾)",
            "search": "搜尋:",
            "paginate": {
                "first": "第一頁",
                "last": "最後一頁",
                "next": "下一頁",
                "previous": "上一頁"
            }
        }
    });
    
    // 詳細資訊查看功能
    $('#results-table tbody').on('click', 'button.view-details', function() {
        var data = table.row($(this).parents('tr')).data();
        
        // 填充模態視窗資料
        $('#modal-model').text(data.recommended_model);
        $('#modal-area').text(data.area + "坪");
        $('#modal-capacity').text(data.recommended_capacity);
        $('#modal-environment').text(data.environment || "一般環境");
        $('#modal-specs').text(data.specs || "標準規格冷氣機");
        $('#modal-image').attr('src', data.image_url || "https://via.placeholder.com/300x200?text=無商品圖片");
        
        // 顯示模態視窗
        var productModal = new bootstrap.Modal(document.getElementById('productModal'));
        productModal.show();
    });
    
    // 搜尋按鈕 - 使用下拉選單值
    $('#search-btn').click(function() {
        var area = $('#area-select').val();
        var height = $('#height-select').val();
        
        // 重置搜尋
        table.search('').columns().search('').draw();
        
        // 應用坪數篩選
        table.column(0).search(area).draw();
        
        // 應用高度篩選
        if (height !== 'all') {
            table.column(1).search(height).draw();
        }
        
        // 收集勾選的環境條件
        var envConditions = [];
        if ($('#env1').is(':checked')) envConditions.push('東西曬');
        if ($('#env2').is(':checked')) envConditions.push('頂樓或鐵皮');
        if ($('#env3').is(':checked')) envConditions.push('大片落地窗');
        if ($('#env4').is(':checked')) envConditions.push('人員密度高');
        if ($('#env5').is(':checked')) envConditions.push('動態活動');
        if ($('#env6').is(':checked')) envConditions.push('其他熱源');
        
        // 應用環境條件篩選
        if (envConditions.length > 0) {
            var regex = '';
            for (var i = 0; i < envConditions.length; i++) {
                regex += '(?=.*' + envConditions[i] + ')';
            }
            table.column(2).search(regex, true, false).draw();
        }
    });
});
