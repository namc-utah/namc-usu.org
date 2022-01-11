---
title: "Quality Standards"
slug: "SampleProcessing/QualityStandards"
---

# Introduction

The processing of aquatic invertebrate samples involves a number of distinct operations where data errors may occur. At the National Aquatic Monitoring Center (NAMC) these distinct operations include:

1. Sample sorting – The separation and removal of aquatic invertebrates from organic and inorganic material.
2. Invertebrate identification – The identification of each individual invertebrate to the recommended or lowest practical taxonomic level.
3. Data processing – Data entry into a computer database, the matching of samples to sampling locations and any subsequent data analysis or transformations.

Described below are the ways in which we attempt to reduce these potential errors and quantify the accuracy and precision of our sorting, identification and data processing procedures.

# Sorting and Subsampling

The sorting and subsampling of aquatic invertebrate samples involves removing all or a predetermined number (e.g., 600) of randomly selected organisms from the organic and inorganic material within each sample. Error can occur if the sample is not split correctly and/or if all organisms are not removed from a samples plit. To reduce error associated with subsampling procedures, we take the following actions:

1. Use a relatively easy, but effective subsampling method: see “Subsampling” section in Appendix 1: “NAMC Sample Processing: Subsampling, Sorting and Identification of Macroinvertebrate Samples” or the method pictorial guide our website.
2. Intensively train all new employees: includes sorting of a test sample where the type and number of each individual is known and checking all samples (minimum of 15) until 95% sorting efficiency is consistently achieved (see below for explanation).
3. Record all information associated with each sample: sorter’s name, date processed, time required for sorting, the number of invertebrates removed from the sample and sample split. This information is recorded both on sample vial labels and in our database. Upon set completion, this information is reviewed to identify potential abnormalities (e.g., consistent differences in the percent of the sample sorted among sorters, the time required to sort a sample, the number of invertebrates removed during the sample splitting or the big-rare search) among individual samples within a sample set.
4. Thoroughly clean all sorting and subsampling equipment: contamination of samples with individuals from a previous sample is minimized by: 1. thoroughly washing and drying sieves after each sample split; 2. inspecting each sieve prior to splitting a new sample; and 3. noticing if any invertebrates in a sample appear to look "dried out" with respect to other invertebrates in that sample. These desiccated invertebrates may have been leftover from a previous sample (i.e., they were not removed from the sieve during a previous subsampling event and were inadvertently added to a different sample). and thus are removed from the current sample and discarded as there is no way of determining which sample they were supposed to belong to.
5. Conduct systematic checks of sorting effectiveness: 10% of all sorted samples are examined to ensure that at least 95% of the organisms are removed from the examined material. Specifically, a second sorter examines the organic and inorganic matter from which organisms have been removed (i.e., remnant material) for at least 10% of the time that the sample was originally sorted. Remaining organisms are added to sample vials for identification and enumeration. Sorting effectiveness (Es) is subsequently computed as:

TODO: equation

Where R is the total number of organisms obtained during the re-sort of the remnant material and S is the total number of organisms originally obtained from the sample sorting. The goal of this is for ≥ 95% of the organisms be removed during the original sort. Additionally, sorters are evaluated semi-annually in regards to sorting effectiveness and productivity.
6. Remedial Action. If sorting efficiency is between 90 and 94.4% one additional sample is checked for
that particular sorter, if the second sample does not pass, additional randomly selected samples are checked until three consecutive samples achieve 95% sorting efficiency. If sorting efficiency is below 90% for the initial sample, additional randomly selected samples are checked until three consecutive samples achieve 95% sorting efficiency for a particular sorter.

# Verification of Taxonomic Identifications

The NAMC attempts to reduce the number of misidentifications (i.e., accuracy) and improve the consistency (i.e., precision) of taxonomic resolution among taxonomists through a number of conscientious efforts. These efforts include:

1. Taxonomic certification and workshops: all NAMC taxonomists are certified in the identification of Western EPT taxa by the Society for Freshwater Science (formally North American Benthological Society). NAMC taxonomists also attend regional taxonomic seminars offered by the Northwest Bioassessment Work Group, Southwest Association of Freshwater Invertebrate Taxonomists, local universities and other entities. Lastly, NAMC taxonomists bring questionable taxa to the taxonomy fairs and workshops to consult taxonomic experts on an approximately annual basis .
2. Constant and consistent communication among all taxonomists: questionable specimens are immediately shared with all other taxonomists and compared to voucher specimens from ourlaboratoryandtheUtahStateUniversityinsectcollection. Ifconsensuscannotbe reached among our taxonomists, the specimens are shown to resident entomologists at Utah State University. If consensus is still not reached, the taxonomic resolution is left at a coarser
level (e.g., genus to family) and the specimen is set aside to be shown to an outside expert.
3. Review a composite taxa list for each set of samples: composite taxa lists are reviewed for taxonomic consistency (e.g., all monotypic taxa identified to species) among taxonomists and
rare, invasive, or unusual taxa for the habitats or geographical location sampled. Particular attention is given to taxa found at low frequencies within a set or documented by only one taxonomist. These taxa are then re-examined to ensure the accuracy of identifications.
4. Re-identification and enumeration: a second taxonomist, who was not responsible for the original identifications, re-identifies and re-enumerates a minimum of 10% of the samples identified per year (and 10% from a given sample set as requested). This allows for the detection of both isolated (single occurrences) and systematic (multiple regular occurrences) taxonomicerrors,whichdictatesthecorrectiveactionthatshouldbetaken. Similarity
between taxonomists is assessed using Sorensen’s similarity index (B):

TODO: equation

Where Xij and Xik are the number of individuals of species i in the respective samples (j,k). The comparison between both samples is summed for n number of species in the samples. The goal is to have 95% similarity between paired samples. If 95% similarity is not achieved between taxonomists and discrepancies do not result from taxonomic ambiguities, all mis- identified operational taxonomic units identified by the taxonomist in question are independently checked for all samples within a particular sample set.
5. External taxonomic verification: 10% of all operational taxonomic units plus 20% of rare OTUs identified within a given calendar year are verified by external experts. The specimens are randomly selected from our database regardless of original taxonomist and excluding taxa identified to a coarser resolution relative to our Standard Effort Levels (see Appendix 1). Prior to sending specimens for verification, at least two taxonomists review the specimenandcometoaconsensusontheidentification. Oncespecimensarereturned,the expert’s identification is compared to both the original identification and the consensus identification. If there is a mis-identification bias by a particular taxonomist, the issue is addressed. The verified specimens are retained in the reference collection.

# Data processing and sample verification

All sample, site, and invertebrate data is stored in an SQL database. As of 2012, customers can submit sample and site data directly to our lab via an online submission process. Before acceptance into the processing queue, this data is thoroughly checked for common issues, including matching to jar labels, feasible sampling areas, comparison to historical methods, and proximity to existing sites. Customers are contacted when discrepancies arise to clarify current and past methods, station locations, and sample information.
As stated in Appendix 1, all sorters and taxonomists enter their processing and identification data directly into an electronic interface which updates a central SQL database. Before
   
generating reports, the data is checked for missing information, outliers, and other discrepancies. The SQL database has integrity constraints and routine queries for maintaining consistency of data. Customers are contacted for approval before any major changes are made to past data.

# Summary

The National Aquatic Monitoring Center staff members have 6-14 years experience tracking, processing and identifying aquatic macroinvertebrate samples. QA/QC is a dynamic process and constructive comments are always welcome.
In 2002, the National Aquatic Monitoring Center recently completed a comprehensive QA/QC evaluationofallofitsfieldandlaboratoryprocedures. Littlebiasorvariationinseveral measures of accuracy and precision among different field crews, sample sorters, taxonomists and the same taxonomist identifying the same sample several times over a several month period were detected (Table 1).

Table 1. Summary of variability in data attributable to different activities associated with collection of field data, laboratory sample processing and taxonomic identifications. These data were compiled during December of 2002.

|Component of Variability Measured|Range in percent Similarity|
|---|---|
|Similarity in assemblage composition based on Jaccard Coefficient:||
|Among field crews|92-96%|
|Among sample sorting technicians|Not yet determined|
|Among taxonomists|98%|
|Among identifications by the same taxonomist during different weeks|98%|
|Coefficients of Variation in taxa richness:|Range in Percent|
|Among field crews|4-7|
|Among sample sorting technicians|3-6|
|Among taxonomists|4-6|
|Among identifications by the same taxonomist during different weeks|2-3|
