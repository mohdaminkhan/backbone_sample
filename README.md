# backbone_sample



#Require JS


 Allows you to load JS files asnychronously.

 Loading scripts synchronously waits for the script to load before rendering 
 anything after it in the page.

 You can load the scripts asynchronously. Using the async attribute on the 
 script tag.
 However any subsequent inline javascript that has a reference to the script code
 will throw an error.

 The purpose of require.js it to be able to load scripts asynchronously.

 We need to load the require.js file first.

 But after require is loaded we can load other scripts asynchronously.


 #syntax


 	require(['path.to.script'], function(){ 

	/// run script code
	}
	)


	data-main="loads the configuration file or the base path"
