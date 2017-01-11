$(document).on('turbolinks:load', function() {
  $("form").on("click", ".remove_fields", function(event) {
    $(this).closest(".poll_options").find('.destroy_element').val("1");
    $(this).closest(".poll_options").hide(500);
    $(this).closest("fieldset").hide(500);
    return event.preventDefault();
  });
  (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.7&appId=1377753405796618";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

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
  
  $('form').on('click', '#button-submit-question-show', function(event){
    var checked = $("#new_users_answer input[type=radio]:checked").length > 0; 
    if (!checked)
    {
       alert('Ban chua chon dap an nao');
       return false;
    }
  });

  $(".not_implement_yet").on("click", function(){
    alert("Chức năng này chưa được hoàn thiện !^^");
  });

  $(".open_stat").on('click', function(event){
    $(".question_poll_end").toggle(500);
    $(this).html(function(i, text){
      return text === 'Xem thống kê <i class="fa fa-chevron-down"></i>' ? 'Ẩn thống kê <i class="fa fa-chevron-up"></i>' : 'Xem thống kê <i class="fa fa-chevron-down"></i>';
    })
  });

  $('#close-result-modal').on('click', function(){
    $("#answer-result").html('');
    $("#user_ansered").html('');
    $("#correct_answer").html('');
    $("#user-point").html('');
  });

  $('.image_question').on('click', function(){
    checked = $(this).is(":checked")
    if (!checked) {

    }
    $('.fileinputs').toggle(500);
  });

  $('.video_question').on('click', function(){
    checked = $(this).is(":checked")
    if (!checked) {
      $('.video_field').val(''); 
    }
    $('.video_field').toggle(500);
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
