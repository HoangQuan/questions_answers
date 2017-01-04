$(document).ready(function($) {
    var img = $(".default_logo")[0];
    var pic_real_width, pic_real_height;
    $("<img/>").attr("src", $(img).attr("src")).load(function() {
        pic_real_width = this.width;
        pic_real_height = this.height;
        $(".retina_logo").attr("width", pic_real_width).attr("height", pic_real_height);
    });
    $(".navigation ul li ul").parent("li").addClass("parent-list");
    $(".parent-list").find("a:first").append(" <span class='menu-nav-arrow'><i class='icon-angle-down'></i></span>");
    $(".navigation ul a").removeAttr("title");
    $(".navigation ul ul").css({
        display: "none"
    });
    $(".navigation ul li").each(function() {
        var sub_menu = $(this).find("ul:first");
        $(this).hover(function() {
            sub_menu.stop().css({
                overflow: "hidden",
                height: "auto",
                display: "none",
                paddingTop: 0
            }).slideDown(250, function() {
                $(this).css({
                    overflow: "visible",
                    height: "auto"
                });
            });
        }, function() {
            sub_menu.stop().slideUp(50, function() {
                $(this).css({
                    overflow: "hidden",
                    display: "none"
                });
            });
        });
    });
    var aboveHeight = $("#header").outerHeight();
    var fixed_enabled = $("#wrap").hasClass("fixed-enabled");
    if (fixed_enabled) {
        $(window).scroll(function() {
            if ($(window).scrollTop() > aboveHeight) {
                $("#header").css({
                    "top": "0"
                }).addClass("fixed-nav");
            } else {
                $("#header").css({
                    "top": "auto"
                }).removeClass("fixed-nav");
            }
        });
    } else {
        $("#header").removeClass("fixed-nav");
    }
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        var mobile_device = true;
    } else {
        var mobile_device = false;
    }
    $(window).bind("resize", function() {
        if ($(this).width() < 465) {
            $(".social_icons").each(function() {
                if ($(this).find("li").length > 10) {
                    $(this).find("li i").addClass("font11");
                    $(this).find("li i").removeClass("font17");
                }
            });
        } else {
            $(".social_icons").each(function() {
                if ($(this).find("li").length > 10) {
                    $(this).find("li i").addClass("font17");
                    $(this).find("li i").removeClass("font11");
                }
            });
        }
        if ($(this).width() < 767) {
            $(".panel-pop").each(function() {
                var panel_pop = $(this);
                var panel_width = panel_pop.outerWidth();
                if ($("body").hasClass("rtl")) {
                    panel_pop.css("margin-right", "-" + panel_width / 2 + "px");
                } else {
                    panel_pop.css("margin-left", "-" + panel_width / 2 + "px");
                }
            });
        }
    });
    if ($(this).width() < 767) {
        $(".panel-pop").each(function() {
            var panel_pop = $(this);
            var panel_width = panel_pop.outerWidth();
            if ($("body").hasClass("rtl")) {
                panel_pop.css("margin-right", "-" + panel_width / 2 + "px");
            } else {
                panel_pop.css("margin-left", "-" + panel_width / 2 + "px");
            }
        });
    }
    if ($(window).width() < 465) {
        $(".social_icons").each(function() {
            if ($(this).find("li").length > 10) {
                $(this).find("li i").addClass("font11");
                $(this).find("li i").removeClass("font17");
            }
        });
    } else {
        $(".social_icons").each(function() {
            if ($(this).find("li").length > 10) {
                $(this).find("li i").addClass("font17");
                $(this).find("li i").removeClass("font11");
            }
        });
    }
    $(".navigation > div > ul > li").clone().appendTo('.navigation_mobile > ul');
    if ($(".navigation_mobile_click").length) {
        $(".navigation_mobile_click").click(function() {
            if ($(this).hasClass("navigation_mobile_click_close")) {
                $(this).next().slideUp(500);
                $(this).removeClass("navigation_mobile_click_close");
                if ($("#wrap").hasClass("fixed-enabled")) {
                    var attr_style = $("#header").attr("style");
                    attr_style = attr_style.replace("position", "");
                    $("#header").attr("style", attr_style);
                }
            } else {
                $(this).next().slideDown(500);
                $(this).addClass("navigation_mobile_click_close");
                if ($("#wrap").hasClass("fixed-enabled")) {
                    $("#header").css({
                        "position": "static"
                    });
                    $('html,body').animate({
                        scrollTop: $("#wrap").offset().top
                    }, "slow");
                }
            }
        });
        $(".navigation_mobile ul li").each(function() {
            var sub_menu = $(this).find("ul:first");
            $(this).find("> a > .menu-nav-arrow").click(function() {
                if ($(this).parent().parent().find("ul").length > 0) {
                    if ($(this).parent().parent().find("> ul").hasClass("sub_menu")) {
                        $(this).parent().parent().find("> ul").removeClass("sub_menu");
                        sub_menu.stop().slideUp(250, function() {
                            $(this).css({
                                overflow: "hidden",
                                display: "none"
                            });
                        });
                    } else {
                        $(this).parent().parent().find("> ul").addClass("sub_menu");
                        sub_menu.stop().css({
                            overflow: "hidden",
                            height: "auto",
                            display: "none",
                            paddingTop: 0
                        }).slideDown(250, function() {
                            $(this).css({
                                overflow: "visible",
                                height: "auto"
                            });
                        });
                    }
                    return false;
                } else {
                    return true;
                }
            }); 
        });
    }
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".go-up").css("right", "20px");
        } else {
            $(".go-up").css("right", "-60px");
        }
    });
    $(".go-up").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    if ($(".box_warp").length) {
        $(".box_warp").each(function() {
            var box_warp = $(this);
            var box_background = box_warp.attr("box_background");
            var box_color = box_warp.attr("box_color");
            var box_border = box_warp.attr("box_border");
            var box_border_width = box_warp.attr("box_border_width");
            var box_border_radius = box_warp.attr("box_border_radius");
            var box_background_hover = box_warp.attr("box_background_hover");
            var box_color_hover = box_warp.attr("box_color_hover");
            var box_border_hover = box_warp.attr("box_border_hover");
            box_warp.css({
                "background-color": box_background,
                "border-color": box_border,
                "color": box_color,
                "-moz-border-radius": box_border_radius + "px",
                "-webkit-border-radius": box_border_radius + "px",
                "border-radius": box_border_radius + "px"
            });
            if (box_border_width != "") {
                box_warp.css("border", box_border_width + "px solid " + box_border);
            }
            box_warp.find("a").not(".button").css({
                "color": box_color
            });
            box_warp.hover(function() {
                box_warp.css({
                    "background-color": box_background_hover,
                    "border-color": box_border_hover,
                    "color": box_color_hover
                });
                box_warp.find("a").not(".button").css({
                    "color": box_color_hover
                });
            }, function() {
                box_warp.css({
                    "background-color": box_background,
                    "border-color": box_border,
                    "color": box_color
                });
                box_warp.find("a").not(".button").css({
                    "color": box_color
                });
            });
        });
    }
    if ($(".box_icon").length) {
        $(".box_icon").each(function() {
            var box_icon = $(this);
            var icon_align = box_icon.find(".icon_i > span").attr("icon_align");
            var icon_size = box_icon.find(".icon_i > span").attr("icon_size");
            if (box_icon.find(".icon_i > span").hasClass("icon_soft_r") || box_icon.find(".icon_i > span").hasClass("icon_square") || box_icon.find(".icon_i > span").hasClass("icon_circle")) {
                box_icon.find(".icon_i > span").css({
                    "height": icon_size + "px",
                    "width": icon_size + "px",
                    "font-size": icon_size / 2 + "px",
                    "line-height": icon_size + "px"
                });
                box_icon.find(".icon_i > span > span").css({
                    "margin": 0,
                    "text-align": "center"
                }).parent().css({
                    "line-height": icon_size + "px"
                });
            } else if (box_icon.find(".box_text h3 > span").hasClass("icon_soft_r") || box_icon.find(".box_text h3 > span").hasClass("icon_square") || box_icon.find(".box_text h3 > span").hasClass("icon_circle")) {
                if (icon_size > 80 && box_icon.find(".box_text h3 > span > span").length == 1) {
                    var icon_size = 80;
                }
                box_icon.find(".box_text h3 > span").css({
                    "height": icon_size + "px",
                    "width": icon_size + "px",
                    "line-height": icon_size + "px"
                });
            } else {
                box_icon.find(".icon_i > span i").css({
                    "font-size": icon_size / 2 + "px"
                });
            }
            if (icon_align == "left") {
                box_icon.find(".icon_i").css({
                    "display": "inherit"
                });
                if (box_icon.find(".icon_i > span").hasClass("icon_soft_r") || box_icon.find(".icon_i > span").hasClass("icon_square") || box_icon.find(".icon_i > span").hasClass("icon_circle")) {
                    box_icon.find(".box_text").css({
                        "padding-left": parseFloat(icon_size) + 25 + "px"
                    });
                } else if (box_icon.find(".icon_i span[class^='icons']").length == 1) {
                    box_icon.find(".box_text").css({
                        "padding-left": 41 + "px"
                    });
                } else {
                    box_icon.find(".box_text").css({
                        "padding-left": parseFloat(icon_size / 2) + 15 + "px"
                    });
                }
                box_icon.find(".icon_i > span").addClass("f_left");
            } else if (icon_align == "right") {
                box_icon.find(".icon_i").css({
                    "display": "inherit"
                });
                if (box_icon.find(".icon_i > span").hasClass("icon_soft_r") || box_icon.find(".icon_i > span").hasClass("icon_square") || box_icon.find(".icon_i > span").hasClass("icon_circle")) {
                    box_icon.find(".box_text").css({
                        "padding-right": parseFloat(icon_size) + 25 + "px"
                    });
                } else if (box_icon.find(".icon_i span[class^='icons']").length == 1) {
                    box_icon.find(".box_text").css({
                        "padding-right": 41 + "px"
                    });
                } else {
                    box_icon.find(".box_text").css({
                        "padding-right": parseFloat(icon_size / 2) + 15 + "px"
                    });
                }
                box_icon.find(".icon_i > span").addClass("f_right");
            } else if (icon_align == "center") {
                box_icon.find(".icon_i").addClass("t_center");
            }
        });
    }
    if ($(".box_icon").length) {
        $(".box_icon").each(function() {
            var this_icon = $(this);
            var span_bg = this_icon.find(".icon_i > span").attr("span_bg");
            if (span_bg != undefined) {
                this_icon.find(".icon_i > span").css({
                    "background-color": span_bg
                });
            } else {
                var span_bg = this_icon.find(".box_text h3 > span").attr("span_bg");
                this_icon.find(".box_text h3 > span").css({
                    "background-color": span_bg
                });
            }
            var i_color = this_icon.find(".icon_i > span i").attr("i_color");
            if (i_color != undefined) {
                this_icon.find(".icon_i > span i").css({
                    "color": i_color
                });
            }
            var border_radius = this_icon.find(".icon_i > span").attr("border_radius");
            if (border_radius != undefined) {
                this_icon.find(".icon_i > span").css({
                    "-moz-border-radius": border_radius + "px",
                    "-webkit-border-radius": border_radius + "px",
                    "border-radius": border_radius + "px"
                });
            }
            var border_color = this_icon.find(".icon_i > span").attr("border_color");
            if (border_color != undefined) {
                this_icon.find(".icon_i > span").css({
                    "border-color": border_color
                });
                this_icon.find(".box_text h3 > span").css({
                    "border-color": border_color
                });
            } else {
                var border_color = this_icon.find(".box_text h3 > span").attr("border_color");
                this_icon.find(".box_text h3 > span").css({
                    "border-color": border_color
                });
            }
            var border_width = this_icon.find(".icon_i > span").attr("border_width");
            if (border_width != undefined) {
                this_icon.find(".icon_i > span").css({
                    "border-width": border_width + "px",
                    "border-style": "solid"
                });
            } else {
                var border_width = this_icon.find(".box_text h3 > span").attr("border_width");
                this_icon.find(".box_text h3 > span").css({
                    "border-width": border_width + "px",
                    "border-style": "solid"
                });
            }
            this_icon.hover(function() {
                var span_hover = this_icon.find(".icon_i > span").attr("span_hover");
                if (span_hover != undefined) {
                    this_icon.find(".icon_i > span").css({
                        "background-color": span_hover
                    });
                } else {
                    var span_hover = this_icon.find(".box_text h3 > span").attr("span_hover");
                    this_icon.find(".box_text h3 > span").css({
                        "background-color": span_hover
                    });
                }
                var border_hover = this_icon.find(".icon_i > span").attr("border_hover");
                if (border_hover != undefined) {
                    this_icon.find(".icon_i > span").css({
                        "border-color": border_hover
                    });
                } else {
                    var border_hover = this_icon.find(".box_text h3 > span").attr("border_hover");
                    this_icon.find(".box_text h3 > span").css({
                        "border-color": border_hover
                    });
                }
                var i_hover = this_icon.find(".icon_i > span i").attr("i_hover");
                if (i_hover != undefined) {
                    this_icon.find(".icon_i > span i").css({
                        "color": i_hover
                    });
                }
                if (this_icon.find(".button").length) {
                    var button_background_hover = this_icon.find(".button").attr("button_background_hover");
                    var button_color_hover = this_icon.find(".button").attr("button_color_hover");
                    var button_border_hover = this_icon.find(".button").attr("button_border_hover");
                    this_icon.find(".button").css({
                        "background-color": button_background_hover,
                        "color": button_color_hover,
                        "border-color": button_border_hover
                    });
                }
            }, function() {
                if (i_color != undefined) {
                    this_icon.find(".icon_i > span i").css({
                        "color": i_color
                    });
                }
                var span_bg = this_icon.find(".icon_i > span").attr("span_bg");
                if (span_bg != undefined) {
                    this_icon.find(".icon_i > span").css({
                        "background-color": span_bg
                    });
                } else {
                    var span_bg = this_icon.find(".box_text h3 > span").attr("span_bg");
                    this_icon.find(".box_text h3 > span").css({
                        "background-color": span_bg
                    });
                }
                var border_color = this_icon.find(".icon_i > span").attr("border_color");
                if (border_color != undefined) {
                    this_icon.find(".icon_i > span").css({
                        "border-color": border_color
                    });
                } else {
                    var border_color = this_icon.find(".box_text h3 > span").attr("border_color");
                    this_icon.find(".box_text h3 > span").css({
                        "border-color": border_color
                    });
                }
                if (this_icon.find(".button").length) {
                    var button_background = this_icon.find(".button").attr("button_background");
                    var button_color = this_icon.find(".button").attr("button_color");
                    var button_border = this_icon.find(".button").attr("button_border");
                    this_icon.find(".button").css({
                        "background-color": button_background,
                        "color": button_color,
                        "border-color": button_border
                    });
                }
            });
        });
    }
    if ($(".icon_i").length) {
        $(".icon_i").each(function() {
            var this_icon = $(this);
            if (!this_icon.parent().hasClass("box_icon") && !this_icon.parent().parent().hasClass("box_icon") && !this_icon.parent().parent().parent().hasClass("box_icon")) {
                var span_bg = this_icon.find("> span").attr("span_bg");
                var icon_align = this_icon.find("> span").attr("icon_align");
                var icon_size = this_icon.find("> span").attr("icon_size");
                var border_color = this_icon.find("> span").attr("border_color");
                var border_width = this_icon.find("> span").attr("border_width");
                var border_radius = this_icon.find("> span").attr("border_radius");
                var span_hover = this_icon.find("> span").attr("span_hover");
                var border_hover = this_icon.find("> span").attr("border_hover");
                var i_color = this_icon.find("> span i").attr("i_color");
                var i_hover = this_icon.find("> span i").attr("i_hover");
                if (this_icon.find("> span").hasClass("icon_soft_r") || this_icon.find("> span").hasClass("icon_square") || this_icon.find("> span").hasClass("icon_circle")) {
                    this_icon.find("> span").css({
                        "height": icon_size + "px",
                        "width": icon_size + "px",
                        "font-size": icon_size / 2 + "px",
                        "line-height": icon_size + "px"
                    });
                    this_icon.find("> span > span").css({
                        "margin": 0,
                        "text-align": "center"
                    });
                } else {
                    this_icon.find("> span i").css({
                        "font-size": icon_size / 2 + "px"
                    });
                }
                if (icon_align == "left") {
                    this_icon.addClass("f_left");
                } else if (icon_align == "right") {
                    this_icon.addClass("f_right");
                } else if (icon_align == "center") {
                    this_icon.addClass("t_center");
                    this_icon.css("margin-bottom", "15px");
                }
                if (this_icon.find("> span").hasClass("icon_soft_r") || this_icon.find("> span").hasClass("icon_square") || this_icon.find("> span").hasClass("icon_circle")) {
                    this_icon.find("> span").css({
                        "background-color": span_bg,
                        "border-color": border_color,
                        "border-width": border_width + "px",
                        "border-style": "solid",
                        "-moz-border-radius": border_radius + "px",
                        "-webkit-border-radius": border_radius + "px",
                        "border-radius": border_radius + "px"
                    });
                }
                this_icon.find("> span i").css({
                    "color": i_color
                });
                this_icon.hover(function() {
                    if (this_icon.find("> span").hasClass("icon_soft_r") || this_icon.find("> span").hasClass("icon_square") || this_icon.find("> span").hasClass("icon_circle")) {
                        this_icon.find("> span").css({
                            "background-color": span_hover,
                            "border-color": border_hover
                        });
                    }
                    this_icon.find("> span i").css({
                        "color": i_hover
                    });
                }, function() {
                    if (this_icon.find("> span").hasClass("icon_soft_r") || this_icon.find("> span").hasClass("icon_square") || this_icon.find("> span").hasClass("icon_circle")) {
                        this_icon.find("> span").css({
                            "background-color": span_bg,
                            "border-color": border_color
                        });
                    }
                    this_icon.find("> span i").css({
                        "color": i_color
                    });
                });
            }
        });
    }
    if ($(".section-warp").length) {
        $(".section-warp").each(function() {
            var section = $(this);
            var section_background_color = section.attr("section_background_color");
            var section_background = section.attr("section_background");
            var section_background_size = section.attr("section_background_size");
            var section_color = section.attr("section_color");
            var section_color_a = section.attr("section_color_a");
            var section_padding_top = section.attr("section_padding_top");
            var section_padding_bottom = section.attr("section_padding_bottom");
            var section_margin_top = section.attr("section_margin_top");
            var section_margin_bottom = section.attr("section_margin_bottom");
            var section_border_top = section.attr("section_border_top");
            var section_border_bottom = section.attr("section_border_bottom");
            if (section_background != "" && section_background != undefined) {
                section.css({
                    "background-image": "url(" + section_background + ")"
                });
            }
            section.css({
                "background-size": section_background_size,
                "background-color": section_background_color,
                "color": section_color,
                "padding-top": section_padding_top + "px",
                "padding-bottom": section_padding_bottom + "px",
                "margin-top": section_margin_top + "px",
                "margin-bottom": section_margin_bottom + "px"
            });
            section.find("h1").css({
                "color": section_color
            });
            section.find("h2").css({
                "color": section_color
            });
            section.find("h3").css({
                "color": section_color
            });
            section.find("h4").css({
                "color": section_color
            });
            section.find("h5").css({
                "color": section_color
            });
            section.find("h6").css({
                "color": section_color
            });
            section.find("p").css({
                "color": section_color
            });
            section.find("a").not(".button").css({
                "color": section_color_a
            });
            if (section_border_top != "") {
                section.css({
                    "border-top": "1px solid " + section_border_top
                });
            }
            if (section_border_bottom != "") {
                section.css({
                    "border-bottom": "1px solid " + section_border_bottom
                });
            }
        });
    }
    if ($(".accordion").length) {
        $(".accordion").each(function() {
            if ($(this).hasClass("toggle-accordion")) {
                $(this).find(".accordion-toggle-open").addClass("active");
                $(this).find(".accordion-toggle-open").next(".accordion-inner").show();
            } else {
                var what_active = $(this).attr("what-active");
                if (what_active != undefined) {
                    $(this).find(".accordion-inner:nth-child(" + what_active * 2 + ")").show();
                    $(this).find(".accordion-inner:nth-child(" + what_active * 2 + ")").prev().addClass("active");
                }
            }
        });
        $(".accordion .accordion-title").each(function() {
            var i_color = $(this).parent().attr("i_color");
            $(this).parent().find(".accordion-title i").css({
                "color": i_color
            });
            var i_click = $(this).parent().attr("i_click");
            $(this).parent().find(".accordion-title.active i").css({
                "color": i_click
            });
            $(this).click(function() {
                if ($(this).parent().hasClass("toggle-accordion")) {
                    $(this).parent().find("li:first .accordion-title").addClass("active");
                    $(this).toggleClass("active");
                    $(this).next(".accordion-inner").slideToggle();
                } else {
                    if ($(this).next().is(":hidden")) {
                        $(this).parent().find(".accordion-title").removeClass("active").next().slideUp(200);
                        $(this).toggleClass("active").next().slideDown(200);
                    }
                }
                if ($(this).parent().hasClass("acc-style-4")) {
                    $(this).parent().find(".accordion-title.active").next().css({
                        "border-bottom": "1px solid #DEDEDE"
                    });
                }
                $(this).parent().find(".accordion-title i").css({
                    "color": i_color
                });
                $(this).parent().find(".accordion-title.active i").css({
                    "color": i_click
                });
                return false;
            });
        });
    }
// if ($(".tab-inner-warp").length > 0) {
//     $("ul.tabs").tabss(".tab-inner-warp", {
//         effect: "slide",
//         fadeInSpeed: 100
//     });
// }
// var question_tab_value = '';
// if (typeof(localStorage) != 'undefined') {
//     question_tab_value = localStorage.getItem(question_tab);
// }
// if (question_tab_value != '' && $(".question-tab .tabs a[data-js='" + question_tab_value + "']").length) {
//     $(".question-tab .tabs a[data-js='" + question_tab_value + "']").click();
// }
// $('.question-tab .tabs a').click(function(evt) {
//     evt.preventDefault();
//     if (typeof(localStorage) != 'undefined') {
//         localStorage.setItem(question_tab, $(this).attr('data-js'));
//     }
// });
// if ($(".ul.tabs li").length) {
//     $("ul.tabs li").each(function() {
//         var i_color = $(this).parent().parent().attr("i_color");
//         $(this).find("a i").css({
//             "color": i_color
//         });
//         var i_click = $(this).parent().parent().attr("i_click");
//         $(this).find("a.current i").css({
//             "color": i_click
//         });
//         $(this).find("a").hover(function() {
//             $(this).find("i").css({
//                 "color": i_click
//             });
//         }, function() {
//             if ($(this).hasClass("current")) {
//                 $(this).find("i").css({
//                     "color": i_click
//                 });
//             } else {
//                 $(this).find("i").css({
//                     "color": i_color
//                 });
//             }
//         });
//         if (!$(this).parent().parent().hasClass("woocommerce-tabs")) {
//             $(this).click(function() {
//                 var i_color = $(this).parent().parent().attr("i_color");
//                 $(this).parent().find("a i").css({
//                     "color": i_color
//                 });
//                 var i_click = $(this).parent().parent().attr("i_click");
//                 $(this).find("a.current i").css({
//                     "color": i_click
//                 });
//                 return false;
//             });
//             var tab_width = $(this).parent().parent().attr("tab_width");
//             if ($(this).parent().parent().hasClass("tabs-vertical")) {
//                 $(this).parent().css({
//                     "width": tab_width + "px"
//                 });
//                 $(this).parent().parent().find("div.tab-inner-warp").css({
//                     "margin-left": tab_width + "px"
//                 });
//             }
//         }
//     });
// }
    if ($(".button").length) {
        $(".button").each(function() {
            var button = $(this);
            var button_background = button.attr("button_background");
            var button_background_hover = button.attr("button_background_hover");
            var button_color = button.attr("button_color");
            var button_color_hover = button.attr("button_color_hover");
            var button_border = button.attr("button_border");
            var button_border_hover = button.attr("button_border_hover");
            var button_border_width = button.attr("button_border_width");
            var button_border_radius = button.attr("button_border_radius");
            button.css({
                "background-color": button_background,
                "color": button_color,
                "border": button_border_width + "px solid " + button_border,
                "-moz-border-radius": button_border_radius + "px",
                "-webkit-border-radius": button_border_radius + "px",
                "border-radius": button_border_radius + "px"
            });
            button.hover(function() {
                button.css({
                    "background-color": button_background_hover,
                    "color": button_color_hover,
                    "border-color": button_border_hover
                });
            }, function() {
                button.css({
                    "background-color": button_background,
                    "color": button_color,
                    "border": button_border_width + "px solid " + button_border,
                    "-moz-border-radius": button_border_radius + "px",
                    "-webkit-border-radius": button_border_radius + "px",
                    "border-radius": button_border_radius + "px"
                });
            });
        });
    }
    if ($(".ul_list").length) {
        $(".ul_list").each(function() {
            var ul_list = $(this);
            var list_background = ul_list.attr("list_background");
            var list_background_hover = ul_list.attr("list_background_hover");
            var list_color = ul_list.attr("list_color");
            var list_color_hover = ul_list.attr("list_color_hover");
            var list_border_radius = ul_list.attr("list_border_radius");
            if (ul_list.hasClass("ul_list_circle") || ul_list.hasClass("ul_list_square")) {
                ul_list.find("ul li i").css({
                    "background-color": list_background,
                    "-moz-border-radius": list_border_radius + "px",
                    "-webkit-border-radius": list_border_radius + "px",
                    "border-radius": list_border_radius + "px"
                });
                ul_list.find("ul li").hover(function() {
                    $(this).find("i").css({
                        "background-color": list_background_hover
                    });
                }, function() {
                    $(this).find("i").css({
                        "background-color": list_background
                    });
                });
            }
            ul_list.find("ul li i").css({
                "color": list_color
            });
            ul_list.find("ul li").hover(function() {
                $(this).find("i").css({
                    "color": list_color_hover
                });
            }, function() {
                $(this).find("i").css({
                    "color": list_color
                });
            });
            ul_list.find("i").each(function() {
                var ul_l = $(this);
                var l_background = ul_l.attr("l_background");
                var l_background_hover = ul_l.attr("l_background_hover");
                var l_color = ul_l.attr("l_color");
                var l_color_hover = ul_l.attr("l_color_hover");
                var l_border_radius = ul_l.attr("l_border_radius");
                if (ul_l.hasClass("ul_l_circle") || ul_l.hasClass("ul_l_square")) {
                    ul_l.css({
                        "background-color": l_background,
                        "-moz-border-radius": l_border_radius + "px",
                        "-webkit-border-radius": l_border_radius + "px",
                        "border-radius": l_border_radius + "px"
                    });
                    ul_l.parent().hover(function() {
                        ul_l.css({
                            "background-color": l_background_hover
                        });
                    }, function() {
                        ul_l.css({
                            "background-color": l_background
                        });
                    });
                }
                ul_l.css({
                    "color": l_color
                });
                ul_l.parent().hover(function() {
                    ul_l.css({
                        "color": l_color_hover
                    });
                }, function() {
                    ul_l.css({
                        "color": l_color
                    });
                });
            });
        });
    }
    if ($("blockquote").length) {
        $("blockquote").each(function() {
            var blockquote = $(this);
            var blockquote_background = blockquote.attr("blockquote_background");
            var blockquote_color = blockquote.attr("blockquote_color");
            var blockquote_border = blockquote.attr("blockquote_border");
            blockquote.css({
                "background-color": blockquote_background,
                "color": blockquote_color,
                "border-color": blockquote_border
            });
        });
    }
    if ($(".dropcap").length) {
        $(".dropcap").each(function() {
            var dropcap = $(this);
            var dropcap_background = dropcap.attr("dropcap_background");
            var dropcap_color = dropcap.attr("dropcap_color");
            var dropcap_border_radius = dropcap.attr("dropcap_border_radius");
            if (dropcap_border_radius != "" && dropcap_border_radius != undefined) {
                dropcap.css({
                    "-moz-border-radius": dropcap_border_radius + "px",
                    "-webkit-border-radius": dropcap_border_radius + "px",
                    "border-radius": dropcap_border_radius + "px"
                });
            }
            dropcap.css({
                "background-color": dropcap_background,
                "color": dropcap_color
            });
        });
    }
    if ($(".divider").length) {
        $(".divider").each(function() {
            var divider = $(this);
            var divider_color = divider.attr("divider_color");
            divider.css({
                "border-bottom-color": divider_color
            });
        });
    }
    if ($(".progressbar-percent").length) {
        $(".progressbar-percent").each(function() {
            var $this = $(this);
            var percent = $this.attr("attr-percent");
            $this.bind("inview", function(event, isInView, visiblePartX, visiblePartY) {
                if (isInView) {
                    $this.animate({
                        "width": percent + "%"
                    }, percent * 20);
                }
            });
        });
    }
    if ($(".testimonial-warp").length) {
        $(".testimonial-warp").each(function() {
            var testimonial = $(this);
            var testimonial_background = testimonial.attr("testimonial_background");
            var testimonial_color = testimonial.attr("testimonial_color");
            var testimonial_border = testimonial.attr("testimonial_border");
            var border_radius = testimonial.attr("border_radius");
            var client_color = testimonial.attr("client_color");
            var jop_color = testimonial.attr("jop_color");
            testimonial.find(".testimonial").css({
                "background-color": testimonial_background,
                "color": testimonial_color,
                "border-color": testimonial_border,
                "-moz-border-radius": border_radius + "px",
                "-webkit-border-radius": border_radius + "px",
                "border-radius": border_radius + "px"
            });
            testimonial.find(".testimonial a").css({
                "color": testimonial_color
            });
            testimonial.find(".testimonial-f-arrow").css({
                "border-top-color": testimonial_border
            });
            testimonial.find(".testimonial-l-arrow").css({
                "border-top-color": testimonial_background
            });
            testimonial.find(".testimonial-client > span").css({
                "color": client_color
            });
            testimonial.find(".testimonial-client > span > span").css({
                "color": jop_color
            });
        });
    }
    if ($(".callout_warp").length) {
        $(".callout_warp").each(function() {
            var callout_warp = $(this);
            if (callout_warp.find(".button_right").length == 1) {
                callout_warp.find(".callout_inner").css("margin-right", parseFloat(callout_warp.find(".button_right").outerWidth()) + 25);
                var button_css_top = (((parseFloat(callout_warp.innerHeight())) / 2)) - parseFloat(callout_warp.find(".button_right").innerHeight()) / 2;
                callout_warp.find(".button_right").css("top", button_css_top);
            }
        });
    }
    if ($(".blog_silder").length && $()) {
        var flex_slider = $(".blog_silder");
        flex_slider.flexslider({
            animation: "fade",
            animationLoop: true,
            slideshow: true,
            slideshowSpeed: 3000,
            animationSpeed: 800,
            pauseOnHover: true,
            pauseOnAction: true,
            controlNav: false,
            directionNav: true,
        });
    }
    if ($(".flex-slider").length && $()) {
        var flex_slider = $(".flex-slider");
        flex_slider.flexslider({
            animation: "fade",
            animationLoop: true,
            slideshow: true,
            slideshowSpeed: 3000,
            animationSpeed: 800,
            pauseOnHover: true,
            pauseOnAction: true,
            controlNav: true,
            directionNav: true,
        });
    }
    $(".tooltip-n").tipsy({
        fade: true,
        gravity: "s"
    });
    $(".tooltip-s").tipsy({
        fade: true,
        gravity: "n"
    });
    $(".tooltip-nw").tipsy({
        fade: true,
        gravity: "nw"
    });
    $(".tooltip-ne").tipsy({
        fade: true,
        gravity: "ne"
    });
    $(".tooltip-w").tipsy({
        fade: true,
        gravity: "w"
    });
    $(".tooltip-e").tipsy({
        fade: true,
        gravity: "e"
    });
    $(".tooltip-sw").tipsy({
        fade: true,
        gravity: "sw"
    });
    $(".tooltip-se").tipsy({
        fade: true,
        gravity: "se"
    });
    if ($(".question_tags,.post_tag").length) {
        $('.question_tags,.post_tag').tag();
    }

    if ($(".del-poll-li").length) {
        $(".del-poll-li").click(function() {
            $(this).parent().parent().addClass('removered').fadeOut(function() {
                $(this).remove();
            });
        });
    }
    if ($(".fileinputs").length) {
        $(".fileinputs input[type='file']").change(function() {
            var file_fake = $(this);
            file_fake.parent().find("button").text(file_fake.val());
        });
    }
    if ($(".fakefile").length) {
        $(".fakefile").click(function() {
            $(this).parent().find("input[type='file']").click();
        });
    }
    if ($(".video_description_input,.video_description").length) {
        var video_description = $(".video_description_input:checked").length;
        if (video_description == 1) {
            $(".video_description").slideDown(300);
        } else {
            $(".video_description").slideUp(300);
        }
        $(".video_description_input").click(function() {
            var video_description_c = $(".video_description_input:checked").length;
            if (video_description_c == 1) {
                $(".video_description").slideDown(300);
            } else {
                $(".video_description").slideUp(300);
            }
        });
    }
    if ($(".ask-question-link").length) {
        $(".ask-question-link").click(function() {
            $(".panel-pop").animate({
                "top": "-100%"
            }, 10).hide();
            $("#ask-question").show().animate({
                "top": "2%"
            }, 500);
            $("html,body").animate({
                scrollTop: 0
            }, 500);
            $("body").prepend("<div class='wrap-pop'></div>");
            wrap_pop();
            return false;
        });
    }
    if ($(".add_upload_button_js").length) {
        $(".add_upload_button_js").click(function() {
            $(this).parent().parent().find('.question_poll_item').append('<li id="poll_li_' + next_attachment + '"><div class="poll-li"><div class="fileinputs"><input type="file" class="file" name="attachment_m[' + next_attachment + '][file_url]" id="attachment_m[' + next_attachment + '][file_url]"><div class="fakefile"><button type="button" class="button small margin_0">' + select_file + '</button><span><i class="icon-arrow-up"></i>' + browse + '</span></div><div class="del-poll-li"><i class="icon-remove"></i></div><div class="move-poll-li"><i class="icon-fullscreen"></i></div></div></div></li>');
            $(".fileinputs input[type='file']").change(function() {
                var file_fake = $(this);
                file_fake.parent().find("button").text(file_fake.val());
            });
            $(".fakefile").click(function() {
                $(this).parent().find("input[type='file']").click();
            });
            $('#poll_li_' + next_attachment).hide().fadeIn();
            next_attachment++;
            $(".del-poll-li").click(function() {
                $(this).parent().parent().parent().fadeOut(function() {
                    $(this).remove();
                });
            });
            return false;
        });
    }
    if ($(".the-details").length) {
        $("#wp-question-details-wrap").appendTo(".the-details");
        $("#wp-post-details-wrap").appendTo(".the-details");
    }
    if ($(".share-inside").length) {
        $(".share-inside").click(function() {
            if ($(".share-inside-warp").hasClass("share-inside-show")) {
                $(".share-inside-warp").slideUp("500");
                $(".share-inside-warp").removeClass("share-inside-show");
            } else {
                $(".share-inside-warp").slideDown("500");
                $(".share-inside-warp").addClass("share-inside-show");
            }
        });
    }
    if ($(".single-question.question").length > 0 && ($(".question-edit").length > 0 || $(".question-delete").length > 0 || $(".question-follow").length > 0 || $(".question-close").length > 0)) {
        $(".single-question.question").hover(function() {
            $(this).find(".edit-delete-follow-close").slideDown(500);
        }, function() {
            $(this).find(".edit-delete-follow-close").slideUp(500);
        });
    }
    if ($(".post-delete").length) {
        $(".post-delete").click(function() {
            if (confirm(sure_delete_post)) {
                return true;
            } else {
                return false;
            }
        });
    }
    if ($(".question-follow a").length) {
        $(".question-follow a").click(function() {
            question_follow = $(this);
            if ($(".edit-delete-follow-close-2").length > 0) {
                post_id = question_follow.parent().parent().parent().parent().parent().attr('id');
            } else {
                post_id = question_follow.parent().parent().parent().parent().attr('id');
            }
            post_id = post_id.replace("post-", "");
            question_follow.hide();
            if (question_follow.hasClass("unfollow-question")) {
                $.ajax({
                    url: admin_url,
                    type: "POST",
                    data: {
                        action: 'question_unfollow',
                        post_id: post_id
                    },
                    success: function(data) {
                        question_follow.removeClass("unfollow-question");
                        question_follow.find("i").addClass("icon-circle-arrow-up");
                        question_follow.find("i").removeClass("icon-circle-arrow-down");
                        question_follow.attr("original-title", follow_question_attr);
                        question_follow.text(follow_question);
                        question_follow.show();
                    }
                });
            } else {
                $.ajax({
                    url: admin_url,
                    type: "POST",
                    data: {
                        action: 'question_follow',
                        post_id: post_id
                    },
                    success: function(data) {
                        question_follow.addClass("unfollow-question");
                        question_follow.find("i").removeClass("icon-circle-arrow-up");
                        question_follow.find("i").addClass("icon-circle-arrow-down");
                        question_follow.attr("original-title", unfollow_question_attr);
                        question_follow.text(unfollow_question);
                        question_follow.show();
                    }
                });
            }
            return false;
        });
    }
    if ($(".question-close a").length) {
        $(".question-close a").click(function() {
            question_close = $(this);
            if ($(".edit-delete-follow-close-2").length > 0) {
                post_id = question_close.parent().parent().parent().parent().parent().attr('id');
            } else {
                post_id = question_close.parent().parent().parent().parent().attr('id');
            }
            post_id = post_id.replace("post-", "");
            question_close.hide();
            $.ajax({
                url: admin_url,
                type: "POST",
                data: {
                    action: 'question_close',
                    post_id: post_id
                },
                success: function(data) {
                    location.reload();
                }
            });
            return false;
        });
    }
    if ($(".question-open a").length) {
        $(".question-open a").click(function() {
            question_open = $(this);
            if ($(".edit-delete-follow-close-2").length > 0) {
                post_id = question_open.parent().parent().parent().parent().parent().attr('id');
            } else {
                post_id = question_open.parent().parent().parent().parent().attr('id');
            }
            post_id = post_id.replace("post-", "");
            question_open.hide();
            $.ajax({
                url: admin_url,
                type: "POST",
                data: {
                    action: 'question_open',
                    post_id: post_id
                },
                success: function(data) {
                    location.reload();
                }
            });
            return false;
        });
    }
    if ($(".question-delete a").length) {
        $(".question-delete a").click(function() {
            if (confirm(sure_delete)) {
                return true;
            } else {
                return false;
            }
        });
    }
    if ($("li.comment").length) {
        $(".best_answer_re").live("click", function() {
            best_answer_re = this;
            comment_id = $(this).parent().parent().attr('id');
            comment_id = comment_id.replace("comment-", "");
            $(".best_answer_re").hide();
            $(best_answer_re).parent().find(" > .loader_3").show();
            $.ajax({
                url: admin_url,
                type: "POST",
                data: {
                    action: 'best_answer_re',
                    comment_id: comment_id
                },
                success: function(data) {
                    $(best_answer_re).parent().parent().parent().removeClass("comment-best-answer");
                    $(best_answer_re).parent().find(" > .loader_3").hide();
                    $(best_answer_re).parent().find("div.commentform.question-answered").remove();
                    $(".comment-body .text").after('<a class="commentform best_answer_a question-report" title="' + choose_best_answer + '" href="#">' + choose_best_answer + '</a>');
                    $(best_answer_re).remove();
                }
            });
            return false;
        });
        $(".best_answer_a").live("click", function() {
            best_answer_a = this;
            comment_id = $(this).parent().parent().attr('id');
            comment_id = comment_id.replace("comment-", "");
            $(".best_answer_a").hide();
            $(best_answer_a).parent().find(" > .loader_3").show();
            $.ajax({
                url: admin_url,
                type: "POST",
                data: {
                    action: 'best_answer',
                    comment_id: comment_id
                },
                success: function(data) {
                    $(best_answer_a).parent().parent().parent().addClass("comment-best-answer");
                    $(best_answer_a).parent().find(".text").after('<div class="commentform question-answered question-answered-done"><i class="icon-ok"></i>' + best_answer + '</div><div class="clearfix"></div><a class="commentform best_answer_re question-report" title="' + cancel_best_answer + '" href="#">' + cancel_best_answer + '</a>');
                    $(best_answer_a).parent().find(" > .loader_3").hide();
                    $(best_answer_a).remove();
                }
            });
            return false;
        });
    }
    if ($(".comment-best-answer").length > 0) {
        $(".comment-best-answer").prependTo("ol.commentlist");
        $(".comment-best-answer").hide;
    }
    if ($(".vote_not_user").length) {
        $(".vote_not_user").on("click", function() {
            var this_vote_q = this;
            $(this_vote_q).hide();
            $(this_vote_q).parent().find(".loader_3").show();
            if ($(this_vote_q).hasClass("single-question-vote-up") || $(this_vote_q).hasClass("single-question-vote-down")) {
                $(this).parent().parent().parent().parent().parent().find(".no_vote_more").hide(10).text(no_vote_user).slideDown(300).delay(1200).hide(300);
            } else {
                $(this).parent().parent().parent().parent().find(".no_vote_more").hide(10).text(no_vote_user).slideDown(300).delay(1200).hide(300);
            }
            $(this_vote_q).parent().find(".loader_3").hide();
            $(this_vote_q).delay(500).show();
            return false;
        });
    }
    if ($(".question_vote_up").length) {
        $(".question_vote_up").each(function() {
            var this_vote_each = $(this);
            if (this_vote_each.parent().find(".vote_allow").length) {
                this_vote_each.parent().find(".vote_allow").on("click", function() {
                    var this_vote_q = this;
                    var id = $(this).attr('id');
                    id = id.replace('question_vote_up-', "");
                    $(this_vote_q).hide();
                    $(this_vote_q).parent().find(".question_vote_down").hide();
                    if ($(this).hasClass("ask_yes-" + id)) {
                        $(this).parent().parent().parent().parent().find(".no_vote_more").hide(10).text(no_vote_more).slideDown(300).delay(1200).hide(300);
                        $(this_vote_q).parent().find(".loader_3").hide();
                        $(this_vote_q).delay(500).show();
                        $(this_vote_q).parent().find(".question_vote_down").delay(500).show();
                    } else {
                        $.ajax({
                            url: admin_url,
                            type: "POST",
                            data: {
                                action: 'question_vote_up',
                                id: id
                            },
                            success: function(data) {
                                if (data > 0) {
                                    $(this_vote_q).parent().parent().parent().parent().find(".question_vote_result").removeClass("question_vote_red");
                                } else if (data == 0) {
                                    $(this_vote_q).parent().parent().parent().parent().find(".question_vote_result").removeClass("question_vote_red");
                                } else if (data < 0) {
                                    $(this_vote_q).parent().parent().parent().parent().find(".question_vote_result").addClass("question_vote_red");
                                }
                                $(this_vote_q).parent().parent().parent().parent().find(".question_vote_result").html(data);
                                $(this_vote_q).parent().find("#question_vote_up-" + id).addClass("ask_yes-" + id);
                                $(this_vote_q).parent().parent().find("#question_vote_down-" + id).addClass("ask_yes-" + id);
                                $(this_vote_q).parent().find(".loader_3").hide();
                                $(this_vote_q).delay(500).show();
                                $(this_vote_q).parent().find(".question_vote_down").delay(500).show();
                            }
                        });
                    }
                    return false;
                });
            } else if (this_vote_each.parent().find(".vote_not_allow")) {
                this_vote_each.parent().find(".vote_not_allow").on("click", function() {
                    var this_vote_q = this;
                    $(this_vote_q).hide();
                    $(this_vote_q).parent().find(".loader_3").show();
                    $(this).parent().parent().parent().parent().find(".no_vote_more").hide(10).text(no_vote_question).slideDown(300).delay(1200).hide(300);
                    $(this_vote_q).parent().find(".loader_3").hide();
                    $(this_vote_q).delay(500).show();
                    return false;
                });
            }
        });
    }
    if ($(".question_vote_down").length) {
        $(".question_vote_down").each(function() {
            var this_vote_each = $(this);
            if (this_vote_each.parent().find(".vote_allow").length) {
                this_vote_each.parent().find(".vote_allow").on("click", function() {
                    var this_vote_q = this;
                    var id = $(this).attr('id');
                    id = id.replace('question_vote_down-', "");
                    $(this_vote_q).hide();
                    $(this_vote_q).parent().find(".question_vote_up").hide();
                    if ($(this).hasClass("ask_yes-" + id)) {
                        $(this).parent().parent().parent().parent().find(".no_vote_more").hide(10).text(no_vote_more).slideDown(300).delay(1200).hide(300);
                        $(this_vote_q).parent().find(".loader_3").hide();
                        $(this_vote_q).delay(500).show();
                        $(this_vote_q).parent().find(".question_vote_up").delay(500).show();
                    } else {
                        $.ajax({
                            url: admin_url,
                            type: "POST",
                            data: {
                                action: 'question_vote_down',
                                id: id
                            },
                            success: function(data) {
                                if (data > 0) {
                                    $(this_vote_q).parent().parent().parent().parent().find(".question_vote_result").removeClass("question_vote_red");
                                } else if (data == 0) {
                                    $(this_vote_q).parent().parent().parent().parent().find(".question_vote_result").removeClass("question_vote_red");
                                } else if (data < 0) {
                                    $(this_vote_q).parent().parent().parent().parent().find(".question_vote_result").addClass("question_vote_red");
                                }
                                $(this_vote_q).parent().parent().parent().parent().find(".question_vote_result").html(data);
                                $(this_vote_q).parent().parent().find("#question_vote_up-" + id).addClass("ask_yes-" + id);
                                $(this_vote_q).parent().find("#question_vote_down-" + id).addClass("ask_yes-" + id);
                                $(this_vote_q).parent().find(".loader_3").hide();
                                $(this_vote_q).delay(500).show();
                                $(this_vote_q).parent().find(".question_vote_up").delay(500).show();
                            }
                        });
                    }
                    return false;
                });
            } else if (this_vote_each.parent().find(".vote_not_allow")) {
                this_vote_each.parent().find(".vote_not_allow").on("click", function() {
                    var this_vote_q = this;
                    $(this_vote_q).hide();
                    $(this_vote_q).parent().find(".loader_3").show();
                    $(this).parent().parent().parent().parent().find(".no_vote_more").hide(10).text(no_vote_question).slideDown(300).delay(1200).hide(300);
                    $(this_vote_q).parent().find(".loader_3").hide();
                    $(this_vote_q).delay(500).show();
                    return false;
                });
            }
        });
    }
    if ($(".comment_vote_up").length) {
        $(".comment_vote_up").each(function() {
            var this_vote_each = $(this);
            if (this_vote_each.parent().find(".vote_allow").length) {
                this_vote_each.parent().find(".vote_allow").on("click", function() {
                    var this_vote = $(this);
                    var id = this_vote.attr('id');
                    id = id.replace('comment_vote_up-', "");
                    this_vote.parent().hide();
                    this_vote.parent().parent().find(".comment_vote_down").parent().hide();
                    this_vote.parent().parent().find(".loader_3").show();
                    var post_id = this_vote.parent().parent().parent().parent().parent().parent().attr('rel');
                    post_id = post_id.replace('posts-', "");
                    if (this_vote.hasClass("ask_yes_comment-" + id)) {
                        this_vote.parent().parent().parent().parent().parent().find(".no_vote_more").hide(10).text(no_vote_more_answer).slideDown(300).delay(1200).hide(300);
                        this_vote.parent().parent().find(".loader_3").delay(300).hide(10);
                        this_vote.parent().delay(300).show(1);
                        this_vote.parent().parent().find(".comment_vote_down").parent().delay(300).show(1);
                    } else {
                        $.ajax({
                            url: admin_url,
                            type: "POST",
                            data: {
                                action: 'comment_vote_up',
                                id: id,
                                post_id: post_id
                            },
                            success: function(data) {
                                if (data > 0) {
                                    $("#comment-" + id).find(".question_vote_result").removeClass("question_vote_red");
                                } else if (data == 0) {
                                    $("#comment-" + id).find(".question_vote_result").removeClass("question_vote_red");
                                } else if (data < 0) {
                                    $("#comment-" + id).find(".question_vote_result").addClass("question_vote_red");
                                }
                                $("#comment-" + id).find(".question_vote_result").html(data);
                                $("#comment-" + id).find("#comment_vote_up-" + id).addClass("ask_yes_comment-" + id);
                                $("#comment-" + id).find("#comment_vote_down-" + id).addClass("ask_yes_comment-" + id);
                                this_vote.parent().parent().find(".loader_3").hide();
                                this_vote.parent().delay(500).show();
                                this_vote.parent().parent().find(".comment_vote_down").parent().delay(500).show();
                            }
                        });
                    }
                    return false;
                });
            } else if (this_vote_each.parent().find(".vote_not_allow")) {
                this_vote_each.parent().find(".vote_not_allow").on("click", function() {
                    var this_vote_q = $(this);
                    this_vote_q.hide();
                    this_vote_q.parent().find(".loader_3").show();
                    this_vote_q.parent().parent().parent().parent().parent().find(".no_vote_more").hide(10).text(no_vote_answer).slideDown(300).delay(1200).hide(300);
                    this_vote_q.parent().find(".loader_3").hide();
                    this_vote_q.delay(500).show();
                    return false;
                });
            }
        });
    }
    if ($(".comment_vote_down").length) {
        $(".comment_vote_down").each(function() {
            var this_vote_each = $(this);
            if (this_vote_each.parent().find(".vote_allow").length) {
                this_vote_each.parent().find(".vote_allow").on("click", function() {
                    var this_vote = this;
                    var id = $(this).attr('id');
                    id = id.replace('comment_vote_down-', "");
                    $(this_vote).parent().hide();
                    $(this_vote).parent().parent().find(".comment_vote_up").parent().hide();
                    $(this_vote).parent().parent().find(".loader_3").show();
                    var post_id = $(this).parent().parent().parent().parent().parent().parent().attr('rel');
                    post_id = post_id.replace('posts-', "");
                    if ($(this).hasClass("ask_yes_comment-" + id)) {
                        $(this).parent().parent().parent().parent().parent().find(".no_vote_more").hide(10).text(no_vote_more_answer).slideDown(300).delay(1200).hide(300);
                        $(this_vote).parent().parent().find(".loader_3").delay(300).hide(10);
                        $(this_vote).parent().delay(300).show(1);
                        $(this_vote).parent().parent().find(".comment_vote_up").parent().delay(300).show(1);
                    } else {
                        $.ajax({
                            url: admin_url,
                            type: "POST",
                            data: {
                                action: 'comment_vote_down',
                                id: id,
                                post_id: post_id
                            },
                            success: function(data) {
                                if (data > 0) {
                                    $("#comment-" + id).find(".question_vote_result").removeClass("question_vote_red");
                                } else if (data == 0) {
                                    $("#comment-" + id).find(".question_vote_result").removeClass("question_vote_red");
                                } else if (data < 0) {
                                    $("#comment-" + id).find(".question_vote_result").addClass("question_vote_red");
                                }
                                $("#comment-" + id).find(".question_vote_result").html(data);
                                $("#comment-" + id).find("#comment_vote_up-" + id).addClass("ask_yes_comment-" + id);
                                $("#comment-" + id).find("#comment_vote_down-" + id).addClass("ask_yes_comment-" + id);
                                $(this_vote).parent().parent().find(".loader_3").hide();
                                $(this_vote).parent().delay(500).show();
                                $(this_vote).parent().parent().find(".comment_vote_up").parent().delay(500).show();
                            }
                        });
                    }
                    return false;
                });
            } else if (this_vote_each.parent().find(".vote_not_allow")) {
                this_vote_each.parent().find(".vote_not_allow").on("click", function() {
                    var this_vote_q = this;
                    $(this_vote_q).hide();
                    $(this_vote_q).parent().find(".loader_3").show();
                    $(this).parent().parent().parent().parent().parent().find(".no_vote_more").hide(10).text(no_vote_answer).slideDown(300).delay(1200).hide(300);
                    $(this_vote_q).parent().find(".loader_3").hide();
                    $(this_vote_q).delay(500).show();
                    return false;
                });
            }
        });
    }
    if ($(".report_q").length) {
        $(".report_q").on("click", function() {
            report_q = $(this);
            post_id = report_q.parent().attr("id");
            post_id = post_id.replace('post-', "");
            report_q.parent().find(".explain-reported").slideDown();
            report_q.parent().find(".cancel").click(function() {
                report_q.parent().find(".explain-reported").slideUp();
                return false;
            });
            report_q.parent().find(".report").click(function() {
                report = $(this);
                var explain = report_q.parent().find(".explain-reported textarea");
                report_q.parent().find(".required-error").remove();
                if (explain.val() == '') {
                    explain.after('<span class="required-error red">' + ask_error_text + '</span>');
                } else {
                    report.hide();
                    report.parent().find(".loader_3").show();
                    report.parent().find(".cancel").hide();
                    report_q.parent().find(".required-error").remove();
                    $.ajax({
                        url: admin_url,
                        type: "POST",
                        data: {
                            action: 'report_q',
                            post_id: post_id,
                            explain: explain.val()
                        },
                        success: function(data) {
                            explain.val("");
                            report.show();
                            report.parent().find(".cancel").show();
                            report_q.parent().find(".explain-reported").slideUp();
                            report.parent().find(".loader_3").hide();
                            report_q.delay(500).show();
                        }
                    });
                }
                return false;
            });
            return false;
        });
    }
    if ($(".report_c").length) {
        $(".report_c").on("click", function() {
            report_c = $(this);
            comment_id = report_c.parent().parent().parent().parent().parent().attr("id");
            comment_id = comment_id.replace("li-comment-", "");
            report_c.parent().parent().parent().find(".explain-reported").slideDown();
            report_c.parent().parent().parent().find(".cancel").click(function() {
                report_c.parent().parent().parent().find(".explain-reported").slideUp();
                return false;
            });
            report_c.parent().parent().parent().find(".report").click(function() {
                report = $(this);
                var explain = report_c.parent().parent().parent().find(".explain-reported textarea");
                report_c.parent().parent().parent().find(".required-error").remove();
                if (explain.val() == '') {
                    explain.after('<span class="required-error red">' + ask_error_text + '</span>');
                } else {
                    report.hide();
                    report.parent().parent().parent().find(".explain-reported .loader_3").show();
                    report.parent().parent().parent().find(".cancel").hide();
                    report_c.parent().parent().parent().find(".required-error").remove();
                    $.ajax({
                        url: admin_url,
                        type: "POST",
                        data: {
                            action: 'report_c',
                            comment_id: comment_id,
                            explain: explain.val()
                        },
                        success: function(data) {
                            explain.val("");
                            report.show();
                            report.parent().parent().parent().find(".cancel").show();
                            report_c.parent().parent().parent().find(".explain-reported").slideUp();
                            report.parent().parent().parent().find(".explain-reported .loader_3").hide();
                            report_c.delay(500).show();
                        }
                    });
                }
                return false;
            });
            return false;
        });
    }
    if ($(".poll_results").length) {
        $(".poll_results").on("click", function() {
            $(".poll_2").fadeOut(500);
            $(".poll_1").delay(500).slideDown(500);
            return false;
        });
    }
    if ($(".poll_polls").length) {
        $(".poll_polls").on("click", function() {
            $(".poll_1").fadeOut(500);
            $(".poll_2").delay(500).slideDown(500);
            return false;
        });
    }
    if ($(".question_poll_end").length) {
        $(".question_poll_end input").on("click", function() {
            question_poll = $(this);
            $(question_poll).parent().find("input").hide();
            $(question_poll).parent().find("label").hide();
            $(question_poll).parent().parent().parent().parent().find(".loader_3").show();
            poll_id = question_poll.val();
            poll_id = poll_id.replace('poll_', "");
            poll_title = question_poll.attr("rel");
            poll_title = poll_title.replace('poll_', "");
            post_id = question_poll.parent().parent().parent().parent().parent().parent().parent().parent().attr("id");
            post_id = post_id.replace('post-', "");
            $.ajax({
                url: admin_url,
                type: "POST",
                data: {
                    action: 'question_poll',
                    poll_id: poll_id,
                    poll_title: poll_title,
                    post_id: post_id
                },
                success: function(data) {
                    location.reload();
                }
            });
        });
    }
    if ($(".add_favorite").length) {
        $(".add_favorite").click(function() {
            add_favorite = $(this);
            post_id = add_favorite.parent().parent().parent().attr("id");
            post_id = post_id.replace('post-', "");
            add_favorite.hide();
            add_favorite.parent().find(".loader_2").show();
            $.ajax({
                url: admin_url,
                type: "POST",
                data: {
                    action: 'add_favorite',
                    post_id: post_id
                },
                success: function(data) {
                    location.reload();
                }
            });
            return false;
        });
    }
    if ($(".remove_favorite").length) {
        $(".remove_favorite").click(function() {
            remove_favorite = $(this);
            if (remove_favorite.hasClass("question-remove")) {
                post_id = remove_favorite.parent().parent().attr("id");
            } else {
                post_id = remove_favorite.parent().parent().parent().attr("id");
            }
            post_id = post_id.replace('post-', "");
            remove_favorite.hide();
            remove_favorite.parent().find(".loader_2").show();
            $.ajax({
                url: admin_url,
                type: "POST",
                data: {
                    action: 'remove_favorite',
                    post_id: post_id
                },
                success: function(data) {
                    location.reload();
                }
            });
            return false;
        });
    }
    if ($(".user-profile").length) {
        $(".following_not").live("click", function() {
            following_not = $(this);
            following_not_id = following_not.attr("rel");
            following_not.hide();
            $.ajax({
                url: admin_url,
                type: "POST",
                data: {
                    action: 'following_not',
                    following_not_id: following_not_id
                },
                success: function(data) {
                    $(".followers span span").text(data);
                    following_not.addClass("following_you").removeClass("following_not").text(follow_question).show();
                }
            });
            return false;
        });
        $(".following_you").live("click", function() {
            following_you = $(this);
            following_you_id = following_you.attr("rel");
            following_you.hide();
            $.ajax({
                url: admin_url,
                type: "POST",
                data: {
                    action: 'following_me',
                    following_you_id: following_you_id
                },
                success: function(data) {
                    $(".followers span span").text(data);
                    following_you.addClass("following_not").removeClass("following_you").text(unfollow_question).show();
                }
            });
            return false;
        });
    }
    if ($(".form-add-point a").length) {
        $(".form-add-point a").click(function() {
            var point_a = $(this);
            var input_add = $("#input-add-point");
            var input_add_point = input_add.val();
            point_a.hide();
            point_a.parent().parent().parent().find(".loader_2").show();
            post_id = point_a.parent().parent().parent().parent().parent().attr("id");
            post_id = post_id.replace('post-', "");
            $.ajax({
                url: admin_url,
                type: "POST",
                data: {
                    action: 'add_point',
                    input_add_point: input_add_point,
                    post_id: post_id
                },
                success: function(data) {
                    point_a.parent().parent().parent().find(".no_vote_more").hide(10).text(data).slideDown(300).delay(1200).hide(300);
                    point_a.show();
                    point_a.parent().parent().parent().find(".loader_2").hide();
                    input_add.val("");
                }
            });
            return false;
        });
    }
    if ($(".login-panel-link").length) {
        $(".login-panel-link").click(function() {
            if ($(this).hasClass("header-top-active")) {
                $(".login-panel").slideUp(500);
                $(this).removeClass("header-top-active");
                $(this).find("i").addClass("icon-user");
                $(this).find("i").removeClass("icon-remove");
            } else {
                $(".login-panel").slideDown(500);
                $(this).addClass("header-top-active");
                $(this).find("i").removeClass("icon-user");
                $(this).find("i").addClass("icon-remove");
            }
            return false;
        });
    }
    if ($(".login-form").length) {
        $(".login-form").submit(function() {
            var thisform = $(this);
            $('.required-error', thisform).remove();
            $('input[type="submit"]', thisform).hide();
            $('.loader_2', thisform).show().css({
                "display": "block"
            });
            var fields = $('.inputs', thisform);
            $('.required-item', thisform).each(function() {
                var required = $(this);
                if (required.val() == '') {
                    required.after('<span class=required-error>' + ask_error_text + '</span>');
                    return false;
                }
            });
            if ($('.ask_captcha', thisform).length > 0) {
                var ask_captcha = $('.ask_captcha', thisform);
                var url = v_get_template_directory_uri + "/captcha/captcha.php";
                var postStr = ask_captcha.attr("name") + "=" + encodeURIComponent(ask_captcha.val());
                if (ask_captcha.val() == "") {
                    ask_captcha.parent().append('<span class="required-error required-error-c">' + ask_error_text + '</span>');
                    $('.loader_2', thisform).hide().css({
                        "display": "none"
                    });
                    $('input[type="submit"]', thisform).show();
                    return false;
                } else if (ask_captcha.hasClass("captcha_answer")) {
                    if (ask_captcha.val() != captcha_answer) {
                        ask_captcha.parent().append('<span class="required-error required-error-c">' + ask_error_captcha + '</span>');
                        $('.loader_2', thisform).hide().css({
                            "display": "none"
                        });
                        $('input[type="submit"]', thisform).show();
                        return false;
                    }
                } else {
                    message = "";
                    $.ajax({
                        url: url,
                        type: "POST",
                        data: postStr,
                        async: false,
                        success: function(data) {
                            message = data;
                        }
                    });
                    if (message == "ask_captcha_0") {
                        ask_captcha.parent().append('<span class="required-error required-error-c">' + ask_error_captcha + '</span>');
                        $('.loader_2', thisform).hide().css({
                            "display": "none"
                        });
                        $('input[type="submit"]', thisform).show();
                        return false;
                    }
                }
            }
            var data = {
                action: 'ask_ajax_login_process',
                security: $('input[name=\"login_nonce\"]', thisform).val(),
                log: $('input[name=\"log\"]', thisform).val(),
                pwd: $('input[name=\"pwd\"]', thisform).val(),
                redirect_to: $('input[name=\"redirect_to\"]', thisform).val()
            };
            $.post($('input[name=\"ajax_url\"]', thisform).val(), data, function(response) {
                var result = $.parseJSON(response);
                if (result.success == 1) {
                    window.location = result.redirect;
                } else if (result.error) {
                    $(".ask_error", thisform).hide(10).slideDown(300).html('<strong>' + result.error + '</strong>').delay(3000).slideUp(300);
                } else {
                    return true;
                }
                $('.loader_2', thisform).hide().css({
                    "display": "none"
                });
                $('input[type="submit"]', thisform).show();
            });
            return false;
        });
    }
    if ($(".login-comments,.comment-reply-login").length) {
        $(".login-comments,.comment-reply-login").click(function() {
            $(".panel-pop").animate({
                "top": "-100%"
            }, 10).hide();
            $("#login-comments").show().animate({
                "top": "2%"
            }, 500);
            $("html,body").animate({
                scrollTop: 0
            }, 500);
            $("body").prepend("<div class='wrap-pop'></div>");
            wrap_pop();
            return false;
        });
    }
    if ($(".signup,.login-links-r a").length) {
        $(".signup,.login-links-r a").click(function() {
            $(".panel-pop").animate({
                "top": "-100%"
            }, 10).hide();
            $("#signup").show().animate({
                "top": "2%"
            }, 500);
            $("html,body").animate({
                scrollTop: 0
            }, 500);
            $("body").prepend("<div class='wrap-pop'></div>");
            wrap_pop();
            return false;
        });
    }
    if ($(".signup_form").length) {
        $(".signup_form").submit(function() {
            var whatsubmit_s = true;
            var thisform = $(this);
            $('.required-error', thisform).remove();
            if ($('.ask_captcha', thisform).length > 0) {
                var ask_captcha = $('.ask_captcha', thisform).parent().find("input");
                var url = v_get_template_directory_uri + "/captcha/captcha.php";
                var postStr = ask_captcha.attr("name") + "=" + encodeURIComponent(ask_captcha.val());
                if (ask_captcha.val() == "") {
                    ask_captcha.parent().append('<span class="required-error required-error-c">' + ask_error_text + '</span>');
                    whatsubmit_s = false;
                } else if (ask_captcha.hasClass("captcha_answer")) {
                    if (ask_captcha.val() != captcha_answer) {
                        whatsubmit_s = false;
                        ask_captcha.parent().append('<span class="required-error required-error-c">' + ask_error_captcha + '</span>');
                    } else {
                        whatsubmit_s = true;
                    }
                } else {
                    message = "";
                    $.ajax({
                        url: url,
                        type: "POST",
                        data: postStr,
                        async: false,
                        success: function(data) {
                            message = data;
                        }
                    });
                    if (message == "ask_captcha_0") {
                        ask_captcha.parent().append('<span class="required-error required-error-c">' + ask_error_captcha + '</span>');
                        whatsubmit_s = false;
                    } else {
                        whatsubmit_s = true;
                    }
                }
            }
            $('.required-item', thisform).each(function() {
                var required = $(this);
                if (required.val() == '') {
                    required.after('<span class=required-error>' + ask_error_text + '</span>');
                    whatsubmit_s = false;
                }
            });
            if (!whatsubmit_s) {
                $('.ask_error', thisform).hide(10).slideDown(300).html('<strong>' + ask_error_empty + '</strong>').delay(1000).slideUp(300);
            }
            return whatsubmit_s;
        });
    }
    if ($(".login-password a").length) {
        $(".login-password a").click(function() {
            $(".panel-pop").animate({
                "top": "-100%"
            }, 10).hide();
            $("#lost-password").show().animate({
                "top": "2%"
            }, 500);
            $("html,body").animate({
                scrollTop: 0
            }, 500);
            $("body").prepend("<div class='wrap-pop'></div>");
            wrap_pop();
            return false;
        });
    }
    if ($(".ask-lost-password").length) {
        $(".ask-lost-password").submit(function() {
            var whatsubmit_l = true;
            var thisform = $(this);
            $('.required-error', thisform).remove();
            $('.required-item', thisform).each(function() {
                var required = $(this);
                if (required.val() == '') {
                    required.after('<span class=required-error>' + ask_error_text + '</span>');
                    whatsubmit_l = false;
                }
            });
            if (!whatsubmit_l) {
                $('.ask_error', thisform).hide(10).slideDown(300).html('<strong>' + ask_error_empty + '</strong>').delay(1000).slideUp(300);
            }
            return whatsubmit_l;
        });
    }
    if ($("#commentform").length) {
        $("#commentform").submit(function() {
            var thisform = $(this);
            $('.required-error', thisform).remove();
            if ($('.ask_captcha', thisform).length > 0) {
                var ask_captcha = $('.ask_captcha', thisform).parent().find("input");
                var url = v_get_template_directory_uri + "/captcha/captcha.php";
                var postStr = ask_captcha.attr("name") + "=" + encodeURIComponent(ask_captcha.val());
                if (ask_captcha.val() == "") {
                    ask_captcha.parent().append('<span class="required-error required-error-c">' + ask_error_text + '</span>');
                    return false;
                } else if (ask_captcha.hasClass("captcha_answer")) {
                    if (ask_captcha.val() != captcha_answer) {
                        ask_captcha.parent().append('<span class="required-error required-error-c">' + ask_error_captcha + '</span>');
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    message = "";
                    $.ajax({
                        url: url,
                        type: "POST",
                        data: postStr,
                        async: false,
                        success: function(data) {
                            message = data;
                        }
                    });
                    if (message == "ask_captcha_0") {
                        ask_captcha.parent().append('<span class="required-error required-error-c">' + ask_error_captcha + '</span>');
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        });
    }
    if ($(".panel-pop h2 i").length) {
        $(".panel-pop h2 i").click(function() {
            $(this).parent().parent().animate({
                "top": "-100%"
            }, 500).fadeOut(function() {
                $(this).animate({
                    "top": "-100%"
                }, 500);
            });
            $(".wrap-pop").remove();
        });
    }

    function wrap_pop() {
        $(".wrap-pop").click(function() {
            $(".panel-pop").animate({
                "top": "-100%"
            }, 500).fadeOut(function() {
                $(this).animate({
                    "top": "-100%"
                }, 500);
            });
            $(this).remove();
        });
    }
    if ($(".widget select,select#calc_shipping_country,.woocommerce-sort-by select").length) {
        $(".widget:not(.signup-widget) select,select#calc_shipping_country,.woocommerce-sort-by select").wrap('<div class="styled-select"></div>');
    }
    if ($(".widget li.cat-item,.widget.widget_archive li").length) {
        $(".widget li.cat-item,.widget.widget_archive li").each(function() {
            var e = $(this).contents();
            e.length > 1 && (e.eq(1).wrap('<span class="widget-span"></span>'), e.eq(1).each(function() {}))
        }).contents();
        $(".widget li.cat-item .widget-span,.widget.widget_archive li .widget-span").each(function() {
            $(this).html($(this).text().substring(2));
            $(this).html($(this).text().replace(/\)/gi, ""))
        });
        $(".widget li.cat-item").length && $(".widget li.cat-item .widget-span");
    }
    if ($(".woocommerce").length > 0) {
        $("#calc_shipping_state,#calc_shipping_postcode").parent().addClass("col-md-6").addClass("woocommerce-input");
        $(".woocommerce .woocommerce-input").wrapAll('<div class="row"></div>');
        $("ul.products li .product-details h3 a").each(function() {
            var shortlink = $(this);
            var txt = shortlink.text();
            shortlink.html(trunc(txt, products_excerpt_title));
        });
    }

    function trunc(str, n) {
        return str.substr(0, n - 1);
    }
    if ($(".cart_control").length) {
        $(document).on('click', '.cart_control', function() {
            if ($(this).next('.cart_wrapper').hasClass('cart_wrapper_active')) {
                $(this).next('.cart_wrapper').removeClass('cart_wrapper_active');
                $(this).next('.cart_wrapper').slideUp();
            } else {
                $(this).next('.cart_wrapper').slideDown();
                $(this).next('.cart_wrapper').addClass('cart_wrapper_active');
            }
            return false;
        });
    }
    if ($(".notifications_control").length) {
        $(document).on('click', '.notifications_control', function() {
            if ($(this).next('.notifications-wrapper').hasClass('notifications-wrapper-active')) {
                $(this).next('.notifications-wrapper').removeClass('notifications-wrapper-active');
                $(this).next('.notifications-wrapper').slideUp();
            } else {
                $(this).next('.notifications-wrapper').slideDown();
                $(this).next('.notifications-wrapper').addClass('notifications-wrapper-active');
                $.ajax({
                    url: admin_url,
                    type: "POST",
                    data: "action=update_notifications",
                    async: false,
                    success: function(data) {
                        $(".notifications_control .numofitems").text("0");
                    }
                });
            }
            return false;
        });
    }
    if ($(".wrap-nicescroll").length) {
        $("html").niceScroll({
            scrollspeed: 60,
            mousescrollstep: 38,
            cursorwidth: 6,
            cursorborder: 0,
            cursorcolor: '#bbb',
            autohidemode: false,
            zindex: 9999999,
            horizrailenabled: false,
            cursorborderradius: 0,
        });
    }

    var lightboxArgs = {
        animation_speed: "fast",
        overlay_gallery: true,
        autoplay_slideshow: false,
        slideshow: 5000,
        theme: "pp_default",
        opacity: 0.8,
        show_title: false,
        social_tools: "",
        deeplinking: false,
        allow_resize: true,
        counter_separator_label: "/",
        default_width: 940,
        default_height: 529
    };
    // $("a[href$=jpg], a[href$=JPG], a[href$=jpeg], a[href$=JPEG], a[href$=png], a[href$=gif], a[href$=bmp]:has(img)").prettyPhoto(lightboxArgs);
    // $("a[class^='prettyPhoto'], a[rel^='prettyPhoto']").prettyPhoto(lightboxArgs);
    $(window).load(function() {
        $(".loader").fadeOut(500);
        if ($(".carousel-all").length) {
            $(".carousel-all").each(function() {
                var $current = $(this);
                var $prev = $(this).find(".carousel-prev");
                var $next = $(this).find(".carousel-next");
                var $effect = $(this).attr("carousel_effect");
                var $auto = $(this).attr("carousel_auto");
                var $responsive = $(this).attr("carousel_responsive");
                var $max = $(this).attr("what_col");
                var $pagination = $(this).find(".carousel-pagination");
                if ($current.hasClass("testimonial-carousel")) {
                    var $testimonial_width = $current.width();
                    $current.find(".testimonial-warp").css("width", $testimonial_width)
                }
                if ($max == 1) {
                    var $width = 940;
                }
                if ($max == 2) {
                    var $width = 460;
                }
                if ($max == 3) {
                    var $width = 300;
                }
                if ($max == 4) {
                    var $width = 220;
                }
                if ($max == 5) {
                    var $width = 220;
                }
                if ($max == 6) {
                    var $width = 140;
                }
                $(this).find(".slides").carouFredSel({
                    circular: false,
                    prev: $prev,
                    next: $next,
                    infinite: true,
                    auto: ($auto == "true" ? true : false),
                    responsive: ($responsive == "true" ? true : false),
                    swipe: {
                        onTouch: true
                    },
                    pagination: $pagination,
                    scroll: {
                        easing: "easeInOutCubic",
                        duration: 600,
                        fx: ($effect == "scroll" ? "scroll" : "") + ($effect == "cover-fade" ? "cover-fade" : "") + ($effect == "fade" ? "fade" : "") + ($effect == "directscroll" ? "directscroll" : "") + ($effect == "crossfade" ? "crossfade" : "") + ($effect == "cover" ? "cover" : "") + ($effect == "uncover" ? "uncover" : "") + ($effect == "uncover-fade" ? "uncover-fade" : "") + ($effect == "none" ? "none" : ""),
                    },
                    items: ($max == 6 ? 6 : "") + ($max == 5 ? 5 : "") + ($max == 4 ? 4 : "") + ($max == 3 ? 3 : "") + ($max == 2 ? 2 : "") + ($max == 1 ? 1 : ""),
                });
            });
        }
        if ($(".bxslider").length) {
            $(".bxslider").bxSlider({
                slideWidth: 200,
                minSlides: 4,
                maxSlides: 4,
                slideMargin: 30
            });
        }
    });
    // if (!mobile_device) {
    //     $(".with-sidebar-container").each(function() {
    //         var main_container = $(this);
    //         var sticky_sidebar = main_container.parent().find(".sticky-sidebar");
    //         if (sticky_sidebar.length) {
    //             sticky_sidebar.theiaStickySidebar({
    //                 "containerSelector": main_container,
    //                 "additionalMarginTop": ($("#wrap").hasClass("fixed-enabled") ? 120 : ($("body").hasClass("admin-bar") ? 50 : 40))
    //             });
    //         }
    //     });
    // }
    $(window).trigger('resize');
    $(window).trigger('scroll');

    $.fn.scrollBottom = function() {
        return $(document).height() - this.scrollTop() - this.height();
    };
//     var $widget_menu = $(".widget_menu_$");
//     var $window = $(window);
//     var header = parseFloat($("#header-top").outerHeight() + $("#header").outerHeight() + $(".breadcrumbs").outerHeight() + 70);
//     var footer = parseFloat($("#footer").outerHeight() + $("#footer-bottom").outerHeight() + 80);
//     $window.bind("scroll resize", function() {
//         var gap = $window.height() - $widget_menu.height() + 40;
//         var visibleHead = header - $window.scrollTop();
//         var visibleFoot = footer - $window.scrollBottom();
//         var scrollTop = $window.scrollTop();
//         if (scrollTop < header) {
//             $widget_menu.css({
//                 top: visibleHead + "px",
//                 bottom: "auto"
//             });
//         } else if (visibleFoot > $window.height() - $widget_menu.height()) {
//             $widget_menu.css({
//                 top: "auto",
//                 bottom: visibleFoot + "px"
//             });
//         } else {
//             if ($("#wrap").hasClass("fixed-enabled")) {
//                 $widget_menu.css({
//                     top: parseFloat($("#header.fixed-nav").outerHeight() + 40),
//                     bottom: "auto"
//                 });
//             } else {
//                 $widget_menu.css({
//                     top: "40px",
//                     bottom: "auto"
//                 });
//             }
//         }
//     }).scroll();
    });

// function ask_get_captcha(captcha_file, captcha_id) {
//     var img = $("#" + captcha_id).attr("src", captcha_file + '?' + Math.random());
// }
// return false;
// });
// }