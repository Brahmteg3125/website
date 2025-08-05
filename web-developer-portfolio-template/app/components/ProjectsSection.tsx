import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Parkinson’s Disease Detection System',
							description: 'AI-powered diagnostic tool for early-stage Parkinson’s detection with high accuracy and scalability',
							metrics: {
								Accuracy: 98.6,
								Detection_Time_Reduction: 89.2,
								Scalability: 89.2,
							},
							techDetails: ['Neural Network Architecture (Conv2D, MaxPooling, Dense Layers)', ' XGBoost for Gradient Boosting', ' SHAP for Explainable AI Visualisations', 'AWS S3 for Data Storage'],
							image: '/code.jpg',
						},
						{
							title: 'Smart PDF Assistant',
							description: 'AI based knowledge extraction and conversational platform for PDFs',
							metrics: {
								Accuracy: 94.1,
								Precision: 91.4,
								Scalability: 92,
							},
							techDetails: ['Sentence Transformers for 768D Vector Embeddings', 'PostgreSQL with pgvector for Vector Database', 'Grok LLM (LLaMA 3.3-70B) for NLP', 'CLI-Based Interface for User Interaction'],
							image: '/code.jpg',
						},
			{
							title: 'AI-Driven Crop Disease Detection',
							description: 'High-precision system for detecting plant diseases to reduce crop loss',
							metrics: {
								Precision: 95.8,
								Crop_Loss_Reduction: 91.2,
								Scalability: 188,
							},
							techDetails: ['ResNet50-based CNN with Transfer Learning', 'Data Augmentation (Rotation, Flipping) and L2 Regularisation', 'Linear Programming for Hyperparameter Optimisation', ' AWS EC2 for Model Deployment'],
							image: '/code.jpg',
						},
			{
							title: 'AI-Driven Space Object Classification',
							description: 'AI model for classifying celestial objects from telescope imagery',
							metrics: {
								Accuracy: 95.3,
								Analysis_Efficiency_Improvement: 88,
								Scalability: 90,
							},
							techDetails: ['TensorFlow for Deep Learning Model Development', 'Computer Vision with OpenCV for Image Processing', 'Astrophysics Data Analysis Pipelines', 'Scalable Model Deployment on Cloud Infrastructure'],
							image: '/code.jpg',
						},
					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

									{/* Performance Metrics */}
									<div className="space-y-3">
										<h4 className="text-base sm:text-lg font-semibold">Performance Metrics</h4>
										<div className="grid grid-cols-3 gap-2 sm:gap-4">
											{Object.entries(project.metrics).map(([key, value]) => (
												<div key={key} className="text-center">
													<div className="text-2xl font-bold text-blue-400">{value}</div>
													<div className="text-sm text-gray-400 capitalize">{key}</div>
												</div>
											))}
										</div>
									</div>

									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-400">▹</span>
													<span className="text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
