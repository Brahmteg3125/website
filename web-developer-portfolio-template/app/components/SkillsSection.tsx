import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-[#161B22]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">Technical Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
						{
							category: 'AI & Machine Learning',
							skills: [
								{ name: 'Neural Networks (TensorFlow, PyTorch)', level: 95 },
								{ name: 'Computer Vision (OpenCV, Transformers)', level: 90 },
								{ name: 'Explainable AI (SHAP, Model Card Toolkit)', level: 95 },
								{ name: 'Natural Language Processing (Grok LLM, Transformers)', level: 85 },
							],
							icon: '🎨',
							color: 'from-blue-500 to-blue-700',
						},
						{
							category: 'Backend & APIs',
							skills: [
								{ name: 'Python (Flask/FastAPI)', level: 97 },
								{ name: 'PostgreSQL & Vector Databases', level: 95 },
								{ name: 'AWS Lambda & EC2', level: 85 },
								{ name: 'Scalable System Design', level: 92 },
							],
							icon: '⚡',
							color: 'from-green-500 to-green-700',
						},
						{
							category: 'Performance Optimization',
							skills: [
								{ name: 'Model Performance Tuning', level: 92 },
								{ name: 'Data Processing', level: 88 },
								{ name: 'AWS', level: 85 },
								{ name: 'Data Augmentation & Regularization', level: 82 },
							],
							icon: '🚀',
							color: 'from-purple-500 to-purple-700',
						},
					].map((category) => (
						<div key={category.category} className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">{category.icon}</span>
								<h3 className="text-xl font-bold">{category.category}</h3>
							</div>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between text-sm mb-1">
											<span>{skill.name}</span>
											<span className="text-gray-400">{skill.level}%</span>
										</div>
										<div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
											<div className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`} style={{ width: `${skill.level}%` }}></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
