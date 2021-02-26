function randint(min, max) {
	const res = Math.floor(Math.random() * (max - min) + min);
	console.log(`${min} ${max} ${res}`);
	return res;
}

const feedbackOptions = ["You have structured your application well," +
	" defining methods which are sensible and helpful." +
	" Well done.",
"You have made a lot of use of local variable type " +
"inference in your application; this is good practice. " +
"We were pleased to see this.",
"Plugins in the pom.xml file were specified within a" +
" <pluginManagement> block. As warned about on the discussion " +
"forum, this was generally a bad idea for this coursework.",
	"Your implementation was overengineered",
	"Fuck you."
]

const feedback = feedbackOptions[randint(0, feedbackOptions.length)];
const score = randint(40, 58);

const codeblock = document.querySelector("#ILPGrading");
codeblock.innerText = `The raw overall mark is (${score}/75)\n\n` +
	`The awarded mark includes a deduction for any days late \n` +
	`(5% per calendar day).\n\nDays late: (0)\nThe awarded mark is (${score}/75)\n\n ` +
	`As described in the coursework instructions, marks are awarded for two aspects: ` +
	`readability and correctness.  See below for comments on these ` +
	`and other aspects of your submission.\n\n${feedback}`



