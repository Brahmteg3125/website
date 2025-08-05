import React from 'react';

export const WebCapabilitiesSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Modern Capabilities</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{[
						{
							title: 'Machine Learning & AI',
							icon: '🎓',
							features: ['Neural Networks (TensorFlow, PyTorch)', 'Computer Vision (OpenCV, Transformers)', 'Explainable AI (SHAP, Model Card Toolkit)','Natural Language Processing (Grok LLM, Sentence Transformers)'],
						},
						{
							title: 'Backend Development',
							icon: '⚙️',
							features: ['Python (Flask/FastAPI)', 'Database Management (PostgreSQL, pgvector)', 'Cloud Services (AWS Lambda, EC2, S3)',' Scalable System Design'],
						},
						{
							title: 'Data Processing & Optimisation',
							icon: '📊',
							features: ['Big Data Tools (Apache Spark, PySpark)', 'Performance Tuning (XGBoost, Hyperparameter Optimisation)', 'Data Augmentation & Regularisation','Efficient Data Storage (Vector Databases)'],
						},
						{
							title: 'Deployment',
							icon: '🔧',
							features: ['Containerization (Docker)', 'Cloud Deployment (AWS)', 'CI/CD Practices', 'Model Deployment & Monitoring'],
						},
						{
							title: 'Project Management & Collaboration',
							icon: '🤝',
							features: ['Agile Methodologies (Scrum)', 'Version Control (Git)', 'Team Leadership',' Cross-Functional Collaboration'],
						},
						{
							title: 'Security & Ethics',
							icon: '🔒',
							features: ['Data Privacy', 'Model Bias Detection', 'Secure API Design',' Compliance with AI Ethics Standards'],
						},
					].map((category) => (
						<div key={category.title} className="group bg-[#161B22] p-6 rounded-lg hover:bg-[#21262D] transition-all">
							<div className="text-3xl mb-4">{category.icon}</div>
							<h3 className="text-xl font-bold mb-3">{category.title}</h3>
							<ul className="space-y-2">
								{category.features.map((feature) => (
									<li key={feature} className="text-gray-400 group-hover:text-gray-300 transition-colors">
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
