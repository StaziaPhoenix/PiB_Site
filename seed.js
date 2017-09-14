var mongoose	=	require('mongoose'),
	Project		=	require('./models/project'),
	Sequence	=	require('./models/sequence'),
	Tag			=	require('./models/tag');

var	sequence = {
	name: "Binary Clock"
};

var	projects = [
					{
						name: "ATTiny Programmer",
						creators: ["Colin 'MrSwirlyEyes' Keef"],
						mainImage: "/images/attinyMain.JPG",
						media: ["/images/attiny1.jpg"],
						hook: "Suspendisse malesuada congue sodales.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio.",
						skillsLearned: ["PCB Design", "Arduino", "Embedded Chips", "Soldering", "C Programming"],
						tags: ["Soldering", "EagleCAD"],
						division: "R&D"
					},
					{
						name: "Programmable Heart",
						creators: ["Colin 'MrSwirlyEyes' Keef"],
						mainImage: "/images/heartMain.JPG",
						media: ["/images/heart1.jpg"],
						hook: "In hac habitasse platea dictumst.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio.",					
						skillsLearned: ["PCB Design", "Arduino", "Embedded Chips", "Soldering", "C Programming"],
						tags: ["Soldering", "EagleCAD"],
						division: "R&D"			
					},
					{
						name: "Binary Clock",
						creators: ["Colin 'MrSwirlyEyes' Keef"],
						mainImage: "/images/clockMain.JPG",
						media: ["/images/clock1.jpg", "/images/clock2.jpg"],
						hook: "Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus.",
						description: "Maecenas et neque fermentum, euismod dolor in, porttitor justo. Curabitur metus diam, laoreet vel nisi sed, pharetra viverra enim. Vivamus sagittis, velit eu accumsan commodo, felis sem lacinia velit, vel blandit ligula nibh sit amet risus. Suspendisse malesuada congue sodales. In hac habitasse platea dictumst. Suspendisse mollis facilisis neque quis dignissim. Nullam libero turpis, commodo at elementum a, volutpat ut odio.",
						skillsLearned: ["PCB Design", "Arduino", "Embedded Chips", "Soldering", "C Programming"],
						tags: ["Soldering", "EagleCAD"],
						division: "R&D"
					}
				];

function seedDB() {
	Tag.remove({}, function(err) {});

	Sequence.remove({}, function(err) {
		if (err) {
			return console.log(err);
		}

		Project.remove({}, function(err) {
			if (err) {
				return console.log(err);
			}

			// create sequence
			Sequence.create(sequence, function(err, sequence) {
				if (err) {
					return console.log(err);
				} 
				console.log("Added sequence " + sequence.name);

				console.log(sequence);

				// add projects
				projects.forEach(function(project) {
					project.sequence = sequence;
					Project.create(project, function(err, projectReturned) {
						if (err) {
							console.log(err);
						} else {
							console.log("Saved project " + projectReturned.name + " to " + sequence.name);
						}
					});
				});
			}); // end SEQUENCE create
		}); // end PROJECT remove
	}); // end SEQUENCE remove
	
}

module.exports = seedDB;