require 'mina/bundler'
    require 'mina/rails'
    require 'mina/git'

    # Basic settings:
    # domain     - The hostname to SSH to
    # deploy_to  - Path to deploy into
    # repository - Git repo to clone from (needed by mina/git)
    # user       - Username in the  server to SSH to (optional)

    set :domain, '46.101.36.94'
    set :deploy_to, '/home/deployer/project_admin_frontent'
    set :repository, 'https://bgribbin@bitbucket.org/bgribbin/project_admin_frontent.git'
    set :user, 'deployer'
    set :port, '3001'

    desc "Deploys the current version to the server."
     task :deploy do
       deploy do
         invoke :'git:clone'
         to :launch do
           queue 'forever restart app.js'
         end

      end
    end

    task :start do
     queue %[cd #{deploy_to} && npm install && npm build && npm start]
    end

    task :restart do
     queue %[cd #{deploy_to} && npm install && npm build && npm start]
    end

    task :stop do
      queue %[cd #{deploy_to} && npm install && npm build && npm start]
    end
