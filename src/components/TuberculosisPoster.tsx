'use client'

import Image from 'next/image'

export default function TuberculosisPosterComponent() {
  return (
    <div className="bg-white text-black w-[2000px] h-[3000px] p-8 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Image 
          src="/public/logo/ieee.png" 
          alt="IEEE Computer Society Bangladesh Chapter Logo" 
          width={300} 
          height={100} 
        />
        <h1 className="text-4xl font-bold text-blue-700">2024 IEEE Conference on Computing, Applications and Systems (COMPAS)</h1>
        <Image 
          src="/public/logo/compas.png" 
          alt="IEEE COMPAS 2024 Logo" 
          width={200} 
          height={100} 
        />
      </div>

      {/* Title */}
      <h2 className="text-5xl font-bold text-orange-500 mb-4">Application of Machine Learning K-Means Clustering and Linear Regression in Determining the Risk Level of Pulmonary Tuberculosis</h2>

      {/* Author Information */}
      <div className="bg-orange-400 text-white p-4 mb-4">
        <h3 className="text-2xl font-bold mb-2">Author Information</h3>
        <p className="text-lg">Abhijit Pathak, Ziaul Islam Bablu, Towhidul Haque Limon, Sowmik Barua, Piyal Dey, Mowmita Tajnin Jiba, Touhidul Alam Seyam</p>
        <p className="text-lg">BGC Trust University Bangladesh, Chattogram, Bangladesh</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-4 mb-4 flex-grow">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Abstract</h3>
            <p className="text-sm">
              This study used data from Bangabandhu Sheikh Mujib Medical University Hospital and the Health Department across 17 districts to identify high-risk areas and predict pulmonary tuberculosis incidence. Utilizing K-Means clustering and Cluster-wise Regression, the analysis identified distinct risk clusters and provided insights for targeted interventions and resource allocation.
            </p>
          </div>
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Methodology</h3>
            <Image 
              src="/public/tuberculosis/fig1.png" 
              alt="Stages to determine the Risk Level of Pulmonary Tuberculosis" 
              width={500} 
              height={100} 
              className="mx-auto my-4"
            />
            <p className="text-sm">
              The study employed K-Means clustering to group districts based on TB distribution patterns, followed by cluster-wise linear regression to assess TB risk factors within each cluster.
            </p>
          </div>
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Data Analysis</h3>
            <Image 
              src="/public/tuberculosis/fig3.png" 
              alt="K-Means Cluster Graph" 
              width={500} 
              height={300} 
              className="mx-auto my-4"
            />
            <p className="text-sm">
              The K-Means clustering analysis revealed distinct patterns in TB distribution across different regions, allowing for targeted intervention strategies.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Research Process</h3>
            <Image 
              src="/public/tuberculosis/fig2.png" 
              alt="Stages of Research Methodology" 
              width={500} 
              height={300} 
              className="mx-auto my-4"
            />
            <p className="text-sm">
              The research process involved data collection, preprocessing, K-Means clustering, cluster analysis, linear regression, and model evaluation to determine TB risk levels.
            </p>
          </div>
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Results</h3>
            <p className="text-sm">
              The analysis identified three distinct clusters of TB risk:
              <ul className="list-disc list-inside">
                <li>2 regions in Cluster 1 (low risk)</li>
                <li>6 regions in Cluster 2 (moderate risk)</li>
                <li>9 regions in Cluster 3 (high risk)</li>
              </ul>
              The cluster-wise regression analysis revealed that population density explains 57% of the variation in TB cases.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Linear Regression Analysis</h3>
            <Image 
              src="/public/tuberculosis/fig4.png" 
              alt="Influence of Population Density on TB Patients" 
              width={500} 
              height={300} 
              className="mx-auto my-4"
            />
            <p className="text-sm">
              The graph shows the relationship between population density and the number of pulmonary TB patients, illustrating the predictive power of the linear regression model.
            </p>
          </div>
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Conclusion</h3>
            <p className="text-sm">
              The combined K-Means clustering and linear regression approach provided valuable insights into TB risk patterns across different regions. This method enables targeted public health interventions and efficient resource allocation for TB prevention and control. Future research should explore additional variables and advanced machine learning techniques to enhance predictive power and deepen understanding of TB risk factors.
            </p>
          </div>
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">References</h3>
            <ul className="text-xs list-disc pl-4">
              <li>Mutammimul et al. (2022). Application of the Fuzzy Time Series Model in Clothing Material Stock Forecasting.</li>
              <li>Hardiyanti et al. (2019). Penerapan Metode K-Medoids Clustering pada Penanganan Kasus Diare di Indonesia.</li>
              <li>Gustientiedina et al. (2019). Penerapan Algoritma K-Means untuk Clustering Data Obat-Obatan.</li>
              <li>Fitria et al. (2021). Data Mining Classification Algorithms for Diabetes Dataset Using Weka Tool.</li>
              <li>Ula et al. (2022). Application of Machine Learning in Predicting Children's Nutritional Status with Multiple Linear Regression Models.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm mt-4">
        <p>CUET IT Business Incubator, Chattogram, Bangladesh | 25 - 26 September, 2024</p>
      </div>
    </div>
  )
}