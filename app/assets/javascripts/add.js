$(document).on('turbolinks:load', function() {
  $("form").on("click", ".remove_fields", function(event) {
    $(this).closest(".poll_options").find('.destroy_element').val("1");
    $(this).closest(".poll_options").hide(500);
    $(this).closest("fieldset").hide(500);
    return event.preventDefault();
  });

  $("form").on("click", ".add_fields", function(event) {
    var regexp, time;
    regexp = void 0;
    time = void 0;
    time = new Date().getTime();
    regexp = new RegExp($(this).data("id"), "g");
    $(this).before($(this).data("fields").replace(regexp, time));
    // $(this).hide();
    return event.preventDefault();
  });
  
  $(".not_implement_yet").on("click", function(){
    alert("Chức năng này chưa được hoàn thiện !^^");
  });

  function ChangeToSlug(selected, target_input)
  {
    var title, slug;
 
    //Lấy text từ thẻ input title 
    title = document.getElementById(selected).value;
 
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();
 
    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, " - ");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\s+/g, '');
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    //In slug ra textbox có yyid “slug”
    document.getElementById(target_input).value = slug;
  }
});
