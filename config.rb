require "bundler/setup"
Bundler.require

set :css_dir, "css"
set :js_dir, "js"
set :images_dir, "images"
set :fonts_dir, "fonts"
# set :layout, nil
sprockets.append_path "#{root}/vendor/javascripts/"
#set :css_assets_paths, ["#{root}/vendor/stylesheets/"]

# Development-specific configuration
configure :development do
  # set :debug_assets, true
end

# Build-specific configuration
configure :build do
  #activate :minify_css
  #activate :minify_javascript
end

# Project Routes #### Needs better solution
["embergarten", "throne-of-js", "tecnologic", "rpn", "time_entries"].each do |project|
  proxy "/project/#{project}", "index.html"
end