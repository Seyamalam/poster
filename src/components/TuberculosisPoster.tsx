'use client'

import Image from 'next/image'
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'

export default function TuberculosisPosterComponent() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="w-full h-[150vw] max-h-screen aspect-[2/3] overflow-hidden">
        <div className="w-full h-full overflow-auto bg-white text-black p-4 md:p-8 flex flex-col transform scale-[0.99]">
          {/* Header */}
          <header className="flex justify-between items-center mb-4">
            <Image 
              src="/logo/ieee.png" 
              alt="IEEE Computer Society Bangladesh Chapter Logo" 
              width={300} 
              height={100} 
            />
            <h1 className="text-2xl md:text-4xl font-bold text-blue-700 text-center">2024 IEEE Conference on Computing, Applications and Systems (COMPAS)</h1>
            <Image 
              src="/logo/compas.png" 
              alt="IEEE COMPAS 2024 Logo" 
              width={200} 
              height={100} 
            />
          </header>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-4 text-center">Application of Machine Learning K-Means Clustering and Linear Regression in Determining the Risk Level of Pulmonary Tuberculosis</h2>

          {/* Author Information */}
          <div className="bg-orange-400 text-white p-4 mb-4">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Author Information</h3>
            <p className="text-base md:text-lg">Abhijit Pathak, Ziaul Islam Bablu, Towhidul Haque Limon, Sowmik Barua, Piyal Dey, Mowmita Tajnin Jiba, Touhidul Alam Seyam</p>
            <p className="text-base md:text-lg">BGC Trust University Bangladesh, Chattogram, Bangladesh</p>
          </div>

          {/* Main Content */}
          <main className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 flex-grow">
            {/* Left Column */}
            <section className="flex flex-col gap-4">
              <div className="bg-orange-100 p-4">
                <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-2">Abstract</h3>
                <p className="text-xs md:text-sm">
                  Pulmonary tuberculosis (TB) remains a significant public health concern in densely populated regions like Bireuen, Bangladesh, which reported 755 cases in 2019 among a population of 400,000. This study used data from Bangabandhu Sheikh Mujib Medical University Hospital and the Health Department across 17 districts to identify high-risk areas and predict disease incidence. Utilizing K-Means clustering and Cluster-wise Regression, the analysis identified two high-risk areas in Cluster 1, six in Cluster 2, and nine in Cluster 3, with a regression analysis R-squared value of 0.5740, indicating moderate predictive capacity. These findings provide critical insights for public health authorities to devise targeted interventions and allocate resources effectively.
                </p>
              </div>

              <div className="bg-orange-100 p-4">
                <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-2">Introduction</h3>
                <p className="text-xs md:text-sm">
                  Pulmonary tuberculosis (TB) is a major global health challenge, with India having the highest number of cases. According to the World Health Organization (WHO), TB is one of the top 10 diseases causing death globally. This study aims to enhance TB risk assessment using machine learning techniques like K-Means clustering and linear regression. By analyzing datasets on population density, geographical distribution, and TB patient numbers, the authors identify high-risk areas and forecast disease trends. K-Means clustering groups districts based on TB distribution patterns, while cluster-wise linear regression improves prediction accuracy by considering variable interrelationships. The authors employ these techniques to identify distinct patterns and assess the relationship between specific TB risk factors and the likelihood of developing pulmonary TB. Evaluation against traditional methods will gauge predictive capabilities. This comparative analysis will help determine the added value of machine learning approaches in TB risk prediction. The insights derived from the machine learning models will highlight the most influential risk factors contributing to the development of pulmonary TB.
                </p>
                <p className="text-xs md:text-sm mt-2">
                By analyzing these factors within each identified cluster, the authors can provide a detailed understanding of how different variables interplay to affect TB risk. This information is crucial for developing targeted interventions. Based on the identified risk factors and clusters, the authors will suggest potential interventions or strategies for TB prevention and control. These may include targeted public health campaigns, personalized medical monitoring, and specific lifestyle or environmental modifications. The goal is to utilize the insights gained from the analysis to inform effective and targeted TB prevention and control measures, ultimately reducing the incidence and impact of pulmonary tuberculosis. In Bangladesh, efforts to combat tuberculosis are ongoing through programs like the NTP. However, the risk level of pulmonary tuberculosis remains a concern due to undetected cases and challenges in providing effective treatment and prevention measures. By utilizing innovative machine learning approaches, the authors aim to improve TB risk assessment and stratification, leading to better-targeted interventions and control strategies. The application of these advanced techniques can potentially revolutionize the way TB risk is evaluated and managed, offering a scalable and precise method to address this persistent global health issue.
                </p>
              </div>

              <div className="bg-orange-100 p-4">
                <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-2">Methodology</h3>
                <Image 
                  src="/tuberculosis/fig1.png" 
                  alt="Stages to determine the Risk Level of Pulmonary Tuberculosis" 
                  width={500} 
                  height={100} 
                  className="mx-auto my-4"
                />
                <p className="text-xs md:text-sm">
                  The research methodology involves data collection, preprocessing, K-Means clustering, cluster analysis, linear regression, and model evaluation to determine TB risk levels. The process combines clustering techniques with regression analysis to identify patterns and predict TB incidence based on population density and other factors.
                </p>
                <p className="text-xs md:text-sm">
                The stages of research methodology in applying clustering k-means and linear regression for determining the level of risk of pulmonary tuberculosis are as follows: 
                </p>
                <Image 
                  src="/tuberculosis/fig2.png" 
                  alt="Stages to determine the Risk Level of Pulmonary Tuberculosis" 
                  width={500} 
                  height={100} 
                  className="mx-auto my-4"
                />
                <p className="text-xs md:text-sm">
                The collected tuberculosis dataset is divided into two groups using k-means clustering and linear regression.  The value of k will determine the number of clusters. The datasets in k-means show the cluster results.  Then cluster-wise Regression is the prediction results.  The combination of cluster results and prediction results is the final result.  Analyzing the data in this process is more effective in determining high-risk areas for pulmonary tuberculosis.<br />
                Data analysis in machine learning involves two stages: clustering model with the K-Means algorithm and Cluster Regression method to determine clusters of high-risk pulmonary TB areas and forecasting models to examine the impact of population density on the number of pulmonary tuberculosis patients and to find solutions to the problems generated based on the results of the data sets entered in the analysis.
                </p>
              </div>

              
            </section>

            {/* Middle Column */}
            
            <section className="flex flex-col gap-4">
            <div className="bg-orange-100 p-4">
                <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-2">Research Data</h3>
                <p className="text-xs md:text-sm mb-2">
                  The dataset for the study on the Application of K-Means Clustering and Linear Regression in Determining the Risk Level of Pulmonary Tuberculosis is as follows:
                </p>
                <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm">
      <thead>
        <tr className="bg-orange-200">
          <th className="border px-2 py-1">Number</th>
          <th className="border px-2 py-1">Area</th>
          <th className="border px-2 py-1">Population (People)</th>
          <th className="border px-2 py-1">Area (km²)</th>
          <th className="border px-2 py-1">Pulmonary TB Cases</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-2 py-1">1</td>
          <td className="border px-2 py-1">Dhaka</td>
          <td className="border px-2 py-1">23,936,000</td>
          <td className="border px-2 py-1">369</td>
          <td className="border px-2 py-1">1</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">2</td>
          <td className="border px-2 py-1">Barisal</td>
          <td className="border px-2 py-1">549,000</td>
          <td className="border px-2 py-1">13.23</td>
          <td className="border px-2 py-1">1</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">3</td>
          <td className="border px-2 py-1">Khulna</td>
          <td className="border px-2 py-1">965,483</td>
          <td className="border px-2 py-1">59.57</td>
          <td className="border px-2 py-1">0</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">4</td>
          <td className="border px-2 py-1">Rangpur</td>
          <td className="border px-2 py-1">445,677</td>
          <td className="border px-2 py-1">2308</td>
          <td className="border px-2 py-1">6</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">5</td>
          <td className="border px-2 py-1">Comilla</td>
          <td className="border px-2 py-1">670,775</td>
          <td className="border px-2 py-1">15.1</td>
          <td className="border px-2 py-1">3</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">6</td>
          <td className="border px-2 py-1">Narayanganj</td>
          <td className="border px-2 py-1">286330</td>
          <td className="border px-2 py-1">33.57</td>
          <td className="border px-2 py-1">5</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">7</td>
          <td className="border px-2 py-1">Gazipur</td>
          <td className="border px-2 py-1">213,006</td>
          <td className="border px-2 py-1">49.32</td>
          <td className="border px-2 py-1">4</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">8</td>
          <td className="border px-2 py-1">Jamalpur</td>
          <td className="border px-2 py-1">150,172</td>
          <td className="border px-2 py-1">2031.98</td>
          <td className="border px-2 py-1">11</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">9</td>
          <td className="border px-2 py-1">Faridpur</td>
          <td className="border px-2 py-1">122,425</td>
          <td className="border px-2 py-1">66.24</td>
          <td className="border px-2 py-1">19</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">10</td>
          <td className="border px-2 py-1">Chittagong</td>
          <td className="border px-2 py-1">5,513,609</td>
          <td className="border px-2 py-1">5,282.98</td>
          <td className="border px-2 py-1">1</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">11</td>
          <td className="border px-2 py-1">Sylhet</td>
          <td className="border px-2 py-1">999,374</td>
          <td className="border px-2 py-1">26.5</td>
          <td className="border px-2 py-1">0</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">12</td>
          <td className="border px-2 py-1">Rajshahi</td>
          <td className="border px-2 py-1">983,707</td>
          <td className="border px-2 py-1">34,513</td>
          <td className="border px-2 py-1">18</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">13</td>
          <td className="border px-2 py-1">Mymensingh</td>
          <td className="border px-2 py-1">497,562</td>
          <td className="border px-2 py-1">91.32</td>
          <td className="border px-2 py-1">7</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">14</td>
          <td className="border px-2 py-1">Jessore</td>
          <td className="border px-2 py-1">110,541</td>
          <td className="border px-2 py-1">2610</td>
          <td className="border px-2 py-1">0</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">15</td>
          <td className="border px-2 py-1">Bogra</td>
          <td className="border px-2 py-1">944,877</td>
          <td className="border px-2 py-1">72.5</td>
          <td className="border px-2 py-1">3</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">16</td>
          <td className="border px-2 py-1">Tangail</td>
          <td className="border px-2 py-1">180,144</td>
          <td className="border px-2 py-1">29.04</td>
          <td className="border px-2 py-1">7</td>
        </tr>
        <tr>
          <td className="border px-2 py-1">17</td>
          <td className="border px-2 py-1">Dinajpur</td>
          <td className="border px-2 py-1">206,234</td>
          <td className="border px-2 py-1">20.7</td>
          <td className="border px-2 py-1">1</td>
        </tr>
      </tbody>
    </table>
                </div>
              </div>
              <div className="bg-orange-100 p-4">
                <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-2">Research Data Analysis</h3>
                <p className="text-xs md:text-sm">
                  The K-Means clustering algorithm was applied to classify high-risk areas for pulmonary TB. The steps involved in the K-Means clustering process are:
                </p>
                <ol className="list-decimal list-inside text-xs md:text-sm mt-2">
                  <li>Determine the number of clusters to be formed.</li>
                  <li>Decide on random centroids and initialize clusters according to the number of clusters.</li>
                  <li>Calculate the distance to the centroid using the Euclidean Distance formula:</li>
                </ol>
                <div className="text-sm md:text-base font-bold mt-2 text-center">
                  <BlockMath math="d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" />
                </div>
                <p className="text-xs md:text-sm mt-2">
                  This formula can be generalized to higher dimensions. In three-dimensional space:
                </p>
                <div className="text-sm md:text-base font-bold mt-2 text-center">
                  <BlockMath math="d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}" />
                </div>
                <p className="text-xs md:text-sm mt-2">
                  And in n dimensions:
                </p>
                <div className="text-sm md:text-base font-bold mt-2 text-center">
                  <BlockMath math="d = \sqrt{\sum_{i=1}^n (x_{2i} - x_{1i})^2}" />
                </div>
                <p className="text-xs md:text-sm mt-2">
                  where <InlineMath math="(x_{1i}, x_{2i})" /> are the coordinates of the points in each dimension.
                </p>
                <ol start={4} className="list-decimal list-inside text-xs md:text-sm mt-2">
                  <li>Observe the clustering data with the closest distance value to the centroid.</li>
                  <li>Determine the data center or new centroid.</li>
                  <li>Repeat steps 3-5 until convergence or a maximum number of iterations is reached.</li>
                </ol>
              </div>

              <div className="bg-orange-100 p-4">
                <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-2">Research Data Analysis</h3>
                <p className="text-xs md:text-sm">
                Research utilizing the K-Means algorithm for determining the risk levels of pulmonary tuberculosis (TB) has effectively divided data into distinct clusters. This analysis categorizes areas into different risk groups: two areas fall into the first cluster (low risk), several areas into the second cluster (moderate risk), and the remaining areas into the third cluster (high risk).<br />
                Following the clustering analysis, the study employs the Clusterwise Regression method to predict the impact of population density on the number of pulmonary TB cases. This approach assesses how population density influences the incidence of pulmonary TB across different areas, providing insights into the correlation between these variables and aiding in targeted public health interventions.
                </p>
              </div>

              
            </section>

            {/* Right Column */}
            <section className="flex flex-col gap-4">
            <div className="bg-orange-100 p-4">
                <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-2">Linear Regression Analysis</h3>
                <p className="text-xs md:text-sm">
                  The simple linear regression equation is given by:
                </p>
                <div className="text-sm md:text-base font-bold mt-2 text-center">
                  <BlockMath math="Y = a + bX" />
                </div>
                <p className="text-xs md:text-sm mt-2">
                  Using the calculated coefficients a = 2.584154827 and b = 0.006060898, we can predict the values of Y for given values of X.
                </p>
                <p className="text-xs md:text-sm mt-2">
                  The regression equation is:
                </p>
                <div className="text-sm md:text-base font-bold mt-2 text-center">
                  <BlockMath math="Y = 2.584154827 + 0.006060898X" />
                </div>
                <p className="text-xs md:text-sm mt-2">
                  Calculation of Predicted Values:
                </p>
                <table className="w-full text-xs md:text-sm mt-2">
                  <thead>
                    <tr className="bg-orange-200">
                      <th className="border px-2 py-1">X</th>
                      <th className="border px-2 py-1">Y (Predicted)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-2 py-1">235</td>
                      <td className="border px-2 py-1">4.008465871</td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1">192</td>
                      <td className="border px-2 py-1">3.747847255</td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1">242</td>
                      <td className="border px-2 py-1">4.050892157</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-orange-100 p-4">
                <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-2">Results and Discussions</h3>
                <Image 
                  src="/tuberculosis/fig3.png" 
                  alt="K-Means Cluster Graph showing three distinct clusters of TB risk" 
                  width={500} 
                  height={300} 
                  className="mx-auto my-4"
                />
                <p className="text-xs md:text-sm">
                  The K-Means clustering analysis revealed three distinct clusters of TB risk:
                </p>
                <ul className="list-disc list-inside text-xs md:text-sm mt-2">
                  <li>Cluster 1: 2 regions (low risk)</li>
                  <li>Cluster 2: 6 regions (moderate risk)</li>
                  <li>Cluster 3: 9 regions (high risk)</li>
                </ul>
                <p className="text-xs md:text-sm mt-2">
                  The linear regression analysis showed a moderate relationship between population density and TB incidence, with an R² value of 0.57403.
                </p>
                <Image 
                  src="/tuberculosis/fig4.png" 
                  alt="Influence of Population Density on TB Patients" 
                  width={500} 
                  height={300} 
                  className="mx-auto my-4"
                />
                <p className="text-xs md:text-sm">
                  The scatter plot and regression line demonstrate the relationship between population density and the number of TB cases. The positive slope indicates that as population density increases, the number of TB cases tends to increase as well.
                </p>
              </div>

              <div className="bg-orange-100 p-4">
                <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-2">Conclusion</h3>
                <p className="text-xs md:text-sm">
                  The analysis using the K-means algorithm identified specific areas susceptible to pulmonary tuberculosis, guiding targeted interventions. Clustering revealed three clusters, enabling tailored strategies for each. Cluster-wise Regression showed population density explains 57% of TB variation, highlighting demographic factors' importance. Key findings include:
                </p>
                <ul className="list-disc list-inside text-xs md:text-sm mt-2">
                  <li>Identification of three distinct risk clusters</li>
                  <li>Moderate correlation between population density and TB cases (R² = 0.57403)</li>
                  <li>Potential for targeted interventions based on risk levels</li>
                </ul>
                <p className="text-xs md:text-sm mt-2">
                  This combined approach offers a powerful framework for understanding disease patterns and informing interventions. Future research should focus on integrating diverse data sources and employing non-linear modeling for enhanced understanding and more effective tuberculosis control strategies.
                </p>
              </div>

              <div className="bg-orange-100 p-4">
                <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-2">References</h3>
                <ul className="text-xs list-decimal pl-4">
                  <li>B. Ula Mutammimul, et al. (2022). Application Of The Fuzzy Time Series Model In Clothing Material Stock Forecasting.</li>
                  <li>CLUSTER-WISE REGRESSION PADA STATISTICAL DOWNSCALING UNTUK PENDUGAAN CURAH HUJAN BULANAN. (2019).</li>
                  <li>F. Hardiyanti, et al. (2019). PENERAPAN METODE K-MEDOIDS CLUSTERING PADA PENANGANAN KASUS DIARE DI INDONESIA.</li>
                  <li>G. Gustientiedina, et al. (2019). Penerapan Algoritma K-Means Untuk Clustering Data Obat-Obatan.</li>
                  <li>M. U. Fitria, et al. (2021). Data Mining Classification Algorithms For Diabetes Dataset Using Weka Tool.</li>
                  <li>M. Ula, et al. (2022). Application Of Machine Learning In Predicting Children's Nutritional Status With Multiple Linear Regression Models.</li>
                  <li>N. Puspitasari, et al. (2022). Klasterisasi Wilayah Penghasil Tanaman Lada Menggunakan Algoritma K-Means.</li>
                  <li>R. A. Rizal, et al. (2020). Analysis of Tuberculosis (TB) on X-ray Image Using SURF Feature Extraction and the K-Nearest Neighbor (KNN) Classification Method.</li>
                </ul>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="text-center text-xs md:text-sm mt-4">
            <p>CUET IT Business Incubator, Chattogram, Bangladesh | 25 - 26 September, 2024</p>
          </footer>
        </div>
      </div>
    </div>
  )
}