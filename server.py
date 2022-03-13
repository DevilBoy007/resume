# THIS FILE NEEDS TO BE EDITED TO SERVE RESUME SITE
# CURRENTLY SET UP FOR RESONGER (r.i.p)


import cgi, cgitb
import sqlite3

cgitb.enable()
from flask import Flask, render_template, escape, request, redirect

###		non requestable functions	###	   must exist before Flask object is instantiated		###			###			###

# THIS FUNCTION NEEDS TO CHECK CASE WHERE NAME EXISTS IN DATABASE
def create_user(name, email, password, handle, dob):
# create injection safe variables to use in our sql statements
	name_ = '{}'.format(name)
	email_ = '{}'.format(email)
	password_ = '{}'.format(password)
	handle_ = '{}'.format(handle)
	bday = '{}'.format(dob)

# connect to user database
	db = sqlite3.connect('/Users/dbakr/Desktop/Git/myProjects/resonger/data/users.db')

	#
	#	this is where we need to check if name exists in database (uid [pk]) ?
	#

	# add all of the info from the form into the database in their respective fields
	add = "INSERT INTO users (name, email, password, dob) VALUES ('%s','%s','%s','%s')" % (name_,email_, password_,bday)
	# execute the statement
	db.execute(add)
	# commit the changes and close the connection to user database
	db.commit()
	db.close()

# connect to profile database
	db = sqlite3.connect('/Users/dbakr/Desktop/Git/myProjects/resonger/data/profiles.db')
	# create new profile in the database *** THIS NEEDS TO HANDLE REPEATED NAMES
	create = "create table '%s' (name varchar(60),handle varchar(60), bio varchar(256), uploads file);" % (name_)
	# add the info we've already gathered to their respective fields in the new table
	add = "INSERT INTO '%s' (name, handle) VALUES ('%s','%s');" % (name_,name_, handle_)
	# execute the statements
	db.execute(create)
	db.execute(add)
	# commit the changes and close connection to profile database
	db.commit()
	db.close()
###			###			###			###			###			###
# create the Flask application object
app = Flask(__name__)

# main function that serves static landing page upon get request to '/'
@app.route('/', methods=['GET'])
def main():
	return render_template('./index.html')

# # function that parses form data upon POST request to '/'
# @app.route('/', methods=['POST'])
# def handle_form():
# 	form = cgi.FieldStorage()
# 	name = request.form.get('name')
# 	email = request.form.get('email')
# 	password = request.form.get('password')
# 	handle = request.form.get('_name')
# 	dob = request.form.get('dob')
# 	create_user(name, email, password, handle, dob)
# 	#return "made it here"
# 	return ### leave None return until we have page support ### redirect("./static/upload.html", code = 302)
# # function that parses form data upon POST request to /upload.html
# @app.route('/upload.html', methods=['POST'])
# def upload():
# 	form = cgi.FieldStorage()
# 	title = request.form.get('title')
# 	majKey = request.form.get('key1')
# 	minKey = request.form.get('key2')
# if __name__ == '__main__':
# 	app.run(debug=True)
