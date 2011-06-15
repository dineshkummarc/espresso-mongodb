/* Loads the MongoDB driver dynamically */
(function () {
	var driver, mongo, mongoRhino;

	mongo = new File(extensionPath + '/com.mongodb.jar');
	mongoRhino = new File(extensionPath + '/com.mongodb.rhino.jar');

	driver = new URLClassLoader([
		new URL('jar:' + mongo.toURI() + '!/'),
		new URL('jar:' + mongoRhino.toURI() + '!/')
	]);

	this.Mongo = function () {
		return driver.loadClass('com.mongodb.Mongo').newInstance();
	};

	this.MongoJSON = driver.loadClass('com.mongodb.rhino.JSON').newInstance();
	this.BSON = driver.loadClass('com.mongodb.rhino.BSON').newInstance();
}());
