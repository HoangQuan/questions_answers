module ApplicationHelper
  def link_to_add_attachment(name, f, association, html_options={})
    new_object = f.object.send(association).build
    id = new_object.object_id
    fields = render(association.to_s.singularize + "_fields", { association.to_s.singularize.to_sym => new_object  ,f: f, id: id })
    link_to(name, "javascript:void(0)", class: "add_fields #{html_options[:class]}", style: "#{html_options[:style]}", append_id: html_options[:append_id] , id: html_options[:table_id] ,data: {id: id ,fields: fields.gsub("\n", "")})
  end

  def title(page_title)
    content_for(:title) { page_title }
  end

  def mobile_device?
    if session[:mobile_param]
      session[:mobile_param] == "1"
    else
      request.user_agent =~ /Mobile|webOS/
    end
  end

  def h_model(f, attribute)
    t("models.#{f.object.class.to_s.downcase.pluralize}.#{attribute.to_s}")
  end
end
