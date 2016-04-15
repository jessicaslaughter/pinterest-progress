$(function () {
    
    var $results = $('#results');
    
    $.ajax({
        type: 'GET',
        url: 'https://api.pinterest.com/v1/me/?access_token=AUaYuCWBHXBK44VK-VlokxksP0xBFEVjETrD91VDBIHgvyBBrwAAAAA&fields=counts',
        success: function(results) {
            $results.append(results.data.counts.followers);
        }
    });
    
});