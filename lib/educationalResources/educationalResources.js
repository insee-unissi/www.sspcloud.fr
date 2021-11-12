"use strict";
exports.__esModule = true;
exports.educationalResources = void 0;
/* spell-checker: disable */
var gameController_png_1 = require("app/assets/img/gameController.png");
var grimoire01_png_1 = require("app/assets/img/grimoire01.png");
var grimoire02_png_1 = require("app/assets/img/grimoire02.png");
var grimoire03_png_1 = require("app/assets/img/grimoire03.png");
var grimoire04_png_1 = require("app/assets/img/grimoire04.png");
var grimoire05_png_1 = require("app/assets/img/grimoire05.png");
var grimoire06_png_1 = require("app/assets/img/grimoire06.png");
var grimoire07_png_1 = require("app/assets/img/grimoire07.png");
var grimoire08_png_1 = require("app/assets/img/grimoire08.png");
var grimoire09_png_1 = require("app/assets/img/grimoire09.png");
var grimoire10_png_1 = require("app/assets/img/grimoire10.png");
var grimoire11_png_1 = require("app/assets/img/grimoire11.png");
var grimoire12_png_1 = require("app/assets/img/grimoire12.png");
var grimoire13_png_1 = require("app/assets/img/grimoire13.png");
var neverending_png_1 = require("app/assets/img/neverending.png");
var grenouille_jpg_1 = require("app/assets/img/grenouille.jpg");
var cover_jpg_1 = require("app/assets/img/cover.jpg");
var pollinisateur_jpg_1 = require("app/assets/img/pollinisateur.jpg");
var crabe_jpg_1 = require("app/assets/img/crabe.jpg");
var renard_jpg_1 = require("app/assets/img/renard.jpg");
var kub_png_1 = require("app/assets/img/kub.png");
var rstudio_png_1 = require("app/assets/img/rstudio.png");
var elk_png_1 = require("app/assets/img/elk.png");
var utilitr_png_1 = require("app/assets/img/utilitr.png");
var Onyxia_png_1 = require("app/assets/img/Onyxia.png");
var r_svg_1 = require("app/assets/svg/r.svg");
var jupyter_png_1 = require("app/assets/img/jupyter.png");
var spark_png_1 = require("app/assets/img/spark.png");
var hive_svg_1 = require("app/assets/svg/hive.svg");
var redash_svg_1 = require("app/assets/svg/redash.svg");
var python_jpg_1 = require("app/assets/img/python.jpg");
var python_jpg_2 = require("app/assets/img/python.jpg");
var vault_svg_1 = require("app/assets/svg/vault.svg");
exports.educationalResources = [
    {
        "name": {
            "fr": "FuncampR - Grimoire (FR)",
            "en": "FuncampR - Spellbook (EN - WIP)"
        },
        "abstract": {
            "fr": "Une aventure d'apprentissage vidéoludique pour le langage statistique R, à partager au sein du SSP (et du royaume de Statis). Pour en savoir plus, consulter le site https://funcamp.sspcloud.fr/",
            "en": "A serious game to learn statistical language R, dedicated to beginners - and gamers :-p. For more information, see https://funcamp.sspcloud.fr/"
        },
        "imageUrl": gameController_png_1["default"],
        "parts": [
            {
                "name": "icaRius",
                "abstract": {
                    "fr": "La partie vidéoludique du FuncampR. Jeux de rôle inspiré d'un célèbre jeu vidéo des années 1990...",
                    "en": "The video game part of FuncampR. A RPG inspired by a famous video game from the 1990s ..."
                },
                "authors": [
                    "A. Degorre",
                    {
                        "fr": "communauté Solarus",
                        "en": "Solarus Community"
                    },
                ],
                "contributors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                    {
                        "fr": "communauté Solarus",
                        "en": "Solarus Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Jeu vidéo",
                        "en": "Video Game"
                    },
                ],
                "tags": ["discover", "learn"],
                "category": "statistics with R",
                "imageUrl": gameController_png_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/icarius?autoLaunch=true"
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 1",
                    "en": "IgoR Spellbook - Chapter 1"
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 1 : la maison d’icaRius. Découverture du grimoire IgoR et de la langue des Runes",
                    "en": "Educational part of FuncampR. Chapter 1: icaRius' home. Discovery of the IgoR Spellbook and the Runes' language"
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial"
                    },
                ],
                "tags": ["discover"],
                "category": "statistics with R",
                "imageUrl": grimoire01_png_1["default"],
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapitre1&onyxia.friendlyName=Grimoire-Chap1",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapter1&grimoire.quete=Spellbook_IGoR&onyxia.friendlyName=Spellbook-Chap1"
                }
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 2",
                    "en": "IgoR Spellbook - Chapter 2"
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 2 : la poule pondeuse. Dans le village de Kokoro, icaRius aide la fermière à recomposer le livre des pontes...",
                    "en": "FuncampR educational part. Chapter 2: the laying hen. In the village of Kokoro, icaRius helps the farmer to recompose the egg-laying book..."
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial"
                    },
                ],
                "tags": ["learn"],
                "category": "statistics with R",
                "imageUrl": grimoire02_png_1["default"],
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapitre2&onyxia.friendlyName=Grimoire-Chap2",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapter2&grimoire.quete=Spellbook_IGoR&onyxia.friendlyName=Spellbook-Chap2"
                }
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 3",
                    "en": "IgoR Spellbook - Chapter 3"
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 3 :  le village de GrissGrass. Le chef du village demande à icaRius de trouver quelle est l’exploitation la plus productive en herbe de Mandragore.",
                    "en": "FuncampR educational part. Chapter 3: the village of GrissGrass. The village chief asks icaRius to find the most productive Mandrake farm."
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial"
                    },
                ],
                "tags": ["learn"],
                "category": "statistics with R",
                "imageUrl": grimoire03_png_1["default"],
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapitre3&onyxia.friendlyName=Grimoire-Chap3",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapter3&grimoire.quete=Spellbook_IGoR&onyxia.friendlyName=Spellbook-Chap3"
                }
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 4",
                    "en": "IgoR Spellbook - Chapter 4"
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 4 :  le secret de la culture de Mandragore. IcaRius doit retrouver la recette de la culture de la Mandragore.",
                    "en": "FuncampR educational part. Chapter 4: The Secret of Mandrake Culture. IcaRius must find the recipe for the culture of the Mandrake."
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial"
                    },
                ],
                "tags": ["learn"],
                "category": "statistics with R",
                "imageUrl": grimoire04_png_1["default"],
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapitre4&onyxia.friendlyName=Grimoire-Chap4",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapter4&grimoire.quete=Spellbook_IGoR&onyxia.friendlyName=Spellbook-Chap4"
                }
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 5",
                    "en": "IgoR Spellbook - Chapter 5"
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 5 :  le cuistot Batreb. Pour libérer Essespéus dans le château de Statis, icaRius doit d’abord obtenir la confiance du cuistot Batreb.",
                    "en": "FuncampR educational part. Chapter 5: the cook Batreb. To free Essespeus in Statis Castle, icaRius must first gain the trust of cook Batreb."
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial"
                    },
                ],
                "tags": ["learn"],
                "category": "statistics with R",
                "imageUrl": grimoire05_png_1["default"],
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapitre5&onyxia.friendlyName=Grimoire-Chap5",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapter5&grimoire.quete=Spellbook_IGoR&onyxia.friendlyName=Spellbook-Chap5"
                }
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 6",
                    "en": "IgoR Spellbook - Chapter 6"
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 6 : la fake news. Essespéus et icaRius vont créer une Fake News pour tromper les armées de SaSSoS.",
                    "en": "FuncampR educational part. Chapter 6: fake news. Essespéus and icaRius create a Fake News to deceive the armies of SaSSoS."
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial"
                    },
                ],
                "tags": ["learn"],
                "category": "statistics with R",
                "imageUrl": grimoire06_png_1["default"],
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapitre6&onyxia.friendlyName=Grimoire-Chap6",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapter6&grimoire.quete=Spellbook_IGoR&onyxia.friendlyName=Spellbook-Chap6"
                }
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 7",
                    "en": "IgoR Spellbook - Chapter 7"
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 7 (optionnel): le labyrinthe. Le Mage Delagarde propose à icaRius un défi pour obtenir les bonnes directions dans le labyrinthe.",
                    "en": "FuncampR educational part. Chapter 7 (optional): the labyrinth. Mage Delagarde offers icaRius a challenge to get the right directions in the labyrinth."
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial"
                    },
                ],
                "tags": ["learn"],
                "category": "statistics with R",
                "imageUrl": grimoire07_png_1["default"],
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapitre7&onyxia.friendlyName=Grimoire-Chap7",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapter7&grimoire.quete=Spellbook_IGoR&onyxia.friendlyName=Spellbook-Chap7"
                }
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 8",
                    "en": "IgoR Spellbook - Chapter 8"
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 8: la plume d’IgoR. Pour soulever la pierre qui bloque le passage, icaRius doit apprendre de nouveaux sortilèges.",
                    "en": "FuncampR educational part. Chapter 8: IgoR's Feather. To lift the stone blocking the passage, icaRius must learn new spells."
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial"
                    },
                ],
                "tags": ["learn"],
                "category": "statistics with R",
                "imageUrl": grimoire08_png_1["default"],
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapitre8&onyxia.friendlyName=Grimoire-Chap8",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapter8&grimoire.quete=Spellbook_IGoR&onyxia.friendlyName=Spellbook-Chap8"
                }
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 9",
                    "en": "IgoR Spellbook - Chapter 9"
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 9: le village de Sandia. Mam’Grouxi narre les innombrables naissances qu’elle a vu au fil des ans (des siècles?).",
                    "en": "FuncampR educational part. Chapter 9: the village of Sandia. Mam’Grouxi recounts the countless births she has seen over the years."
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial"
                    },
                ],
                "tags": ["learn"],
                "category": "statistics with R",
                "imageUrl": grimoire09_png_1["default"],
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapitre9&onyxia.friendlyName=Grimoire-Chap9",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapter9&grimoire.quete=Spellbook_IGoR&onyxia.friendlyName=Spellbook-Chap9"
                }
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 10",
                    "en": "IgoR Spellbook - Chapter 10"
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 10: La porte de sortie - Save Me. Dans ses pérégrinations, icaRius se trouve pris au piège dans une salle de l'impossible",
                    "en": "FuncampR educational part. Chapter 10: Exit Door - Save Me. In his wanderings, icaRius finds himself trapped in an Impossible Room."
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial"
                    },
                ],
                "tags": ["learn"],
                "category": "statistics with R",
                "imageUrl": grimoire10_png_1["default"],
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapitre10&onyxia.friendlyName=Grimoire-Chap10",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapter10&grimoire.quete=Spellbook_IGoR&onyxia.friendlyName=Spellbook-Chap10"
                }
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 11",
                    "en": "IgoR Spellbook - Chapter 11"
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 11: Codez-le une fois. L'automate TeoC enseigne à icaRius la Voie du Reproductible",
                    "en": "FuncampR educational part. Chapter 11: Code It Once. The TeoC automaton teaches icaRius the Way of the Reproducible."
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial"
                    },
                ],
                "tags": ["learn"],
                "category": "statistics with R",
                "imageUrl": grimoire11_png_1["default"],
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapitre11&onyxia.friendlyName=Grimoire-Chap11",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapter11&grimoire.quete=Spellbook_IGoR&onyxia.friendlyName=Spellbook-Chap11"
                }
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 12",
                    "en": "IgoR Spellbook - Chapter 12"
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 12: De l’oxygène documentaire. Rencontre d'un drôle d’oiseau, FebeleR, féru de littérature statisienne et de grimoires...",
                    "en": "FuncampR educational part. Chapter 12: Breathe and document. Meeting with a strange bird, FebeleR, fond of Statisian literature and grimoires ..."
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial"
                    },
                ],
                "tags": ["learn"],
                "category": "statistics with R",
                "imageUrl": grimoire12_png_1["default"],
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapitre12&onyxia.friendlyName=Grimoire-Chap12",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapter12&grimoire.quete=Spellbook_IGoR&onyxia.friendlyName=Spellbook-Chap12"
                }
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 13",
                    "en": "IgoR Spellbook - Chapter 13"
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 13: l'histoire sans fin. La gueRnouille Asa apprend à icaRius à écrire lui-même la fin de l'histoire",
                    "en": "FuncampR educational part. Chapter 13: The NeveRending Story. Asa fRog teaches icaRius to write himself the end of the story"
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial"
                    },
                ],
                "tags": ["learn"],
                "category": "statistics with R",
                "imageUrl": grimoire13_png_1["default"],
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapitre13&onyxia.friendlyName=Grimoire-Chap13",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapter13&grimoire.quete=Spellbook_IGoR&onyxia.friendlyName=Spellbook-Chap13"
                }
            },
            {
                "name": {
                    "fr": "Grimoire - Neverending",
                    "en": "Spellbook - Neverending"
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Le parchemin pour écrire soi-même le chapitre 13 et la fin de l'histoire d'icaRius.",
                    "en": "FuncampR educational part. The scroll on which icaRius writes chapter 13 and the end of the  story."
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "en": "FuncampR Community"
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel Rstudio",
                        "en": "Rstudio Tutorial"
                    },
                ],
                "tags": ["discover", "learn"],
                "category": "statistics with R",
                "imageUrl": neverending_png_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/neverending?onyxia.friendlyName=neveRending"
            },
        ]
    },
    {
        "name": "Parcours R",
        "abstract": "Parcours de formation à R du pôle ministériel MTES-MCTRCT",
        "imageUrl": r_svg_1["default"],
        "parts": [
            {
                "name": "1. Découvrir R et RStudio",
                "abstract": "Découvrir le fonctionnement de R, Aborder la dimension modulaire du logiciel, S’approprier l’interface graphique du logiciel, Être en capacité d’importer dans R un fichier CSV et de réaliser des calculs statistiques simples (somme, moyenne, table des fréquences)",
                "authors": [
                    "Thierry Zorn",
                    "Murielle Lethrosne",
                    "Vivien Roussez",
                    "Pascal Irz",
                ],
                "types": ["Tutoriel R"],
                "tags": ["discover"],
                "category": "statistics with R",
                "imageUrl": grenouille_jpg_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&init.personalInit=https://gitlab-forge.din.developpement-durable.gouv.fr/marouane.zellou/test_init_formation/-/raw/master/init.sh&onyxia.friendlyName=«ParcoursR_M1»",
                "articleUrl": "https://mtes-mct.github.io/parcours_r_socle_introduction/"
            },
            {
                "name": "2. Préparer ses données avec R et le Tidyverse",
                "abstract": "Être en capacité d’explorer les données, de les comprendre, de les structurer, de les croiser et les enrichir avec des données externes pour les préparer à des traitements statistiques. La préparation des données est une étape fondamentale pour faciliter la réalisation des analyses statistiques",
                "authors": ["Maël Theulière", "Bruno Terseur"],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "statistics with R",
                "imageUrl": cover_jpg_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&init.personalInit=https://gitlab-forge.din.developpement-durable.gouv.fr/marouane.zellou/test_init_formation/-/raw/master/init.sh&onyxia.friendlyName=«ParcoursR_M2»",
                "articleUrl": "https://mtes-mct.github.io/parcours_r_socle_preparation_des_donnees/"
            },
            {
                "name": "3. Statistiques descriptives avec R",
                "abstract": "Rappels théoriques sur les méthodes usuelles de statistiques uni- et bi-variées, mise en œuvre avec R, interprétation",
                "authors": ["Solène Colin", "Vivien Roussez", "Pascal Irz"],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "statistics with R",
                "imageUrl": pollinisateur_jpg_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&init.personalInit=https://gitlab-forge.din.developpement-durable.gouv.fr/marouane.zellou/test_init_formation/-/raw/master/init.sh&onyxia.friendlyName=«ParcoursR_M3»",
                "articleUrl": "https://mtes-mct.github.io/parcours_r_module_statistiques_descriptives/"
            },
            {
                "name": "4. Analyse des données multi-dimensionnelles avec R",
                "abstract": "Méthodologie pour évaluer, en fonction des caractéristiques des données, la pertinence des méthodes usuelles d'analyse multidimensionnelle (ACP, AFC, ACM, CAH). Mise en œuvre avec le package factoMiner. Sorties graphiques avec le package factoextra. Interprétation",
                "authors": ["Vivien Roussez", "Pascal Irz"],
                "types": ["Tutoriel R"],
                "tags": ["consolidate"],
                "category": "statistics with R",
                "imageUrl": crabe_jpg_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&init.personalInit=https://gitlab-forge.din.developpement-durable.gouv.fr/marouane.zellou/test_init_formation/-/raw/master/init.sh&onyxia.friendlyName=«ParcoursR_M4»",
                "articleUrl": "https://mtes-mct.github.io/parcours_r_module_analyse_multi_dimensionnelles/"
            },
            {
                "name": "5. Valoriser ses données avec R",
                "abstract": "Utiliser les outils R pour produire des graphiques avec le package ggplot2. Produire des cartes en utilisant ggplot2 et sf. Produire des tableaux interactifs. Rendre interactifs des graphiques et des cartes",
                "authors": ["Murielle Lethrosne", "Maël Theulière"],
                "types": ["Tutoriel R"],
                "tags": ["consolidate"],
                "category": "statistics with R",
                "imageUrl": renard_jpg_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&init.personalInit=https://gitlab-forge.din.developpement-durable.gouv.fr/marouane.zellou/test_init_formation/-/raw/master/init.sh&onyxia.friendlyName=«ParcoursR_M5»",
                "articleUrl": "https://mtes-mct.github.io/parcours_r_module_datavisualisation/"
            },
        ]
    },
    {
        "name": "Initiation à Python",
        "abstract": "Cours introductif à Python : fondamentaux du langage et premières manipulations de données",
        "authors": ["inseefrlab"],
        "contributors": [
            "Romain Avouac, Julie Djiriguian, Yves-Laurent Bénichou, Lino Galiana",
        ],
        "types": ["Site documentaire"],
        "tags": ["discover", "learn"],
        "category": "datascience with R and Python",
        "imageUrl": python_jpg_1["default"],
        "parts": [
            {
                "name": "Introduction",
                "abstract": "Introduction de l'auto-formation \"Initiation à Python\" du SSP Cloud",
                "authors": ["inseefrlab"],
                "types": ["Site documentaire"],
                "tags": ["discover", "learn"],
                "category": "datascience with R and Python",
                "imageUrl": python_jpg_1["default"],
                "articleUrl": "https://pythonformationlab.github.io/"
            },
            {
                "name": "Fondamentaux du langage",
                "abstract": "Présentation de la syntaxe et des objets de base en Python",
                "authors": ["inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "datascience with R and Python",
                "imageUrl": python_jpg_1["default"],
                "parts": [
                    {
                        "name": "Types et variables",
                        "abstract": "Manipulation des objets fondamentaux de Python",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                    {
                        "name": "Structures de données",
                        "abstract": "Manipulation des structures de données fondamentales de Python",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                    {
                        "name": "Opérateurs et tests",
                        "abstract": "Manipulation des opérateurs booléens, de comparaison, et des tests",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                    {
                        "name": "Boucles",
                        "abstract": "Manipulation des boucles for/while et des compréhensions de liste",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                    {
                        "name": "Fonctions",
                        "abstract": "Définition et manipulation des fonctions",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                    {
                        "name": "Notions de programmation orienté objet",
                        "abstract": "Définition et manipulation d'objets, leurs attributs et leurs méthodes",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                    {
                        "name": "Mini-projet",
                        "abstract": "Mise en pratique des notions étudiées dans ce chapitre à travers un mini-projet",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                ]
            },
            {
                "name": "Manipulation de données",
                "abstract": "Exploration, manipulation et visualisation de données",
                "authors": ["inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "datascience with R and Python",
                "imageUrl": python_jpg_1["default"],
                "parts": [
                    {
                        "name": "Manipulation de fichiers",
                        "abstract": "Lecture et écriture de fichiers avec Python",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                    {
                        "name": "Introduction à NumPy",
                        "abstract": "Calcul scientifique avec Numpy",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                    {
                        "name": "Introduction à Pandas",
                        "abstract": "Manipulation de données tabulaires avec Pandas",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                    {
                        "name": "Visualisation de données",
                        "abstract": "Introduction aux principales librairies de visualisation en Python",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                    {
                        "name": "Mini-projet",
                        "abstract": "Mise en pratique des notions étudiées dans ce chapitre à travers un mini-projet",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                ]
            },
            {
                "name": "Mener un projet statistique avec Python",
                "abstract": "Bonnes pratiques pour mener des projets statistiques avec Python",
                "authors": ["inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "datascience with R and Python",
                "imageUrl": python_jpg_1["default"],
                "parts": [
                    {
                        "name": "Qualité du code",
                        "abstract": "Standards communautaires de code pour favoriser la collaboration",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                    {
                        "name": "Structure des projets",
                        "abstract": "Comment bien architecturer un projet statistique avec Python",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                    {
                        "name": "Packages",
                        "abstract": "Comment transformer un projet en package pour favoriser la reproductiblité",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                    {
                        "name": "Contrôle de version",
                        "abstract": "Utilisation du logiciel Git pour versionner ses projets Python",
                        "authors": ["inseefrlab"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "articleUrl": "https://pythonformationlab.github.io/"
                    },
                ]
            },
            {
                "name": "Projet final",
                "abstract": "Projet final sanctionnant l'auto-formation \"Initiation à Python\" du SSP Cloud",
                "authors": ["inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "datascience with R and Python",
                "imageUrl": python_jpg_1["default"],
                "articleUrl": "https://pythonformationlab.github.io/"
            },
        ]
    },
    {
        "name": "Python pour la data science",
        "abstract": "Approfondissement de Python pour la data science : manipulation de données, visualisation, modélisation, traitement du langage naturel",
        "authors": ["Lino Galiana"],
        "types": ["Notebook Python"],
        "tags": ["learn", "consolidate"],
        "category": "datascience with R and Python",
        "imageUrl": python_jpg_1["default"],
        "parts": [
            {
                "name": "Manipulation de données",
                "abstract": "Manipulation et récupération automatisée de données",
                "authors": ["Lino Galiana"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "datascience with R and Python",
                "imageUrl": python_jpg_1["default"],
                "parts": [
                    {
                        "name": "NumPy",
                        "abstract": "Pratique du calcul scientifique avec NumPy",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/manipulation-numpy"
                    },
                    {
                        "name": "Pandas : tutoriel",
                        "abstract": "Tutoriel guidé sur le traitement des données tabulaires avec Pandas",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/manipulation-pandas-tutorial"
                    },
                    {
                        "name": "Pandas : mise en pratique",
                        "abstract": "Mise en pratique de Pandas à partir de données issues de la statistique publique",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/manipulation-pandas-tp"
                    },
                    {
                        "name": "GeoPandas : tutoriel",
                        "abstract": "Tutoriel guidé sur le traitement des données géospatiales avec (Geo)Pandas",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/manipulation-geopandas-tutorial"
                    },
                    {
                        "name": "GeoPandas : mise en pratique",
                        "abstract": "Mise en pratique de GeoPandas à partir des données Vélib'",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/manipulation-geopandas-tp"
                    },
                    {
                        "name": "Webscraping",
                        "abstract": "Récupération automatisée de données à partir d'internet",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/manipulation-webscraping"
                    },
                    {
                        "name": "Requêtage d'API",
                        "abstract": "Interaction avec des interfaces de programmation applicative",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/manipulation-api"
                    },
                ]
            },
            {
                "name": "Visualisation de données",
                "abstract": "Graphiques, cartes, et visualisations interactives",
                "authors": ["Lino Galiana"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "datascience with R and Python",
                "imageUrl": python_jpg_1["default"],
                "parts": [
                    {
                        "name": "Graphiques et visualisations interactives",
                        "abstract": "Produire de beaux graphiques avec matplotlib, seaborn et plotly",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/visualisation-graphs"
                    },
                    {
                        "name": "Cartographie",
                        "abstract": "Produire de belles cartes avec geopandas, geoplot et folium",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/visualisation-maps"
                    },
                ]
            },
            {
                "name": "Modélisation",
                "abstract": "Preprocessing, apprentissage supervisé et non supervisé, évaluation de modèles",
                "authors": ["Lino Galiana"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "datascience with R and Python",
                "imageUrl": python_jpg_1["default"],
                "parts": [
                    {
                        "name": "Preprocessing",
                        "abstract": "Exploration et transformation des données en vue de la modélisation",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/modelisation-preprocessing"
                    },
                    {
                        "name": "Evaluation",
                        "abstract": "Evaluation et comparaison des performances de modèles de machine learning",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/modelisation-evaluation"
                    },
                    {
                        "name": "Classification",
                        "abstract": "Classification de données à l'aide d'une machine à vecteurs de support (SVM)",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/modelisation-classification"
                    },
                    {
                        "name": "Régression",
                        "abstract": "Modèles de régression pour l'analyse causale et la prédiction",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/modelisation-regression"
                    },
                    {
                        "name": "Sélection de variables",
                        "abstract": "Illustration du processus de sélection de variables à l'aide d'un modèle LASSO",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/modelisation-features-selection"
                    },
                    {
                        "name": "Clustering",
                        "abstract": "Introduction à l'apprentissage non supervisé à partir des modèles de clustering",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/modelisation-clustering"
                    },
                ]
            },
            {
                "name": "Traitement du langage naturel",
                "abstract": "Analyse et modélisation des données textuelles",
                "authors": ["Lino Galiana"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "datascience with R and Python",
                "imageUrl": python_jpg_1["default"],
                "parts": [
                    {
                        "name": "Introduction",
                        "abstract": "Concepts essentiels pour le traitement du langage naturel",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/nlp-intro"
                    },
                    {
                        "name": "Analyse textuelle",
                        "abstract": "Nettoyage et description statistique d'un texte brut",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/nlp-textual-analysis"
                    },
                    {
                        "name": "Topic modelling",
                        "abstract": "Extraction des principaux sujets d'un texte avec un modèle LDA (Latent Dirichlet Allocation)",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/nlp-topic-modelling"
                    },
                    {
                        "name": "Word embeddings",
                        "abstract": "Modélisation sémantique à l'aide du modèle Word2Vec et du framework Keras",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/nlp-word-embeddings"
                    },
                    {
                        "name": "Exercices supplémentaires",
                        "abstract": "Série d'exercices pour pratiquer les concepts de l'analyse textuelle",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["learn", "consolidate"],
                        "category": "datascience with R and Python",
                        "imageUrl": python_jpg_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=«python-datascience&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/formation-python/main/init-python-datascientist.sh&vault.directory=tm8enk&vault.secret=diffusion/python-datascientist/nlp-exo-supp"
                    },
                ]
            },
        ]
    },
    {
        "name": "Tutoriels ML",
        "abstract": "Tutoriels de Machine learning",
        "imageUrl": jupyter_png_1["default"],
        "parts": [
            {
                "name": "Random forest",
                "abstract": "Initiation au random forest sur les données du Titanic",
                "authors": ["Alexis Dondon"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "datascience with R and Python",
                "imageUrl": jupyter_png_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&init.personalInit=https://git.lab.sspcloud.fr/alexisdondon/formation/-/raw/master/Titanic-randomForest.sh&onyxia.friendlyName=«Random_forest»"
            },
        ]
    },
    {
        "name": "Initiation à Spark",
        "abstract": "Parcours de formation au calcul distribué avec Spark pour du traitement de données à grande échelle.",
        "imageUrl": spark_png_1["default"],
        "parts": [
            {
                "name": "1. Introduction à Spark",
                "abstract": "Bases d'architecture et premiers exemples",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "datascience with R and Python",
                "imageUrl": spark_png_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=edit&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh&vault.secret=diffusion/spark-lab/1-introduction&vault.directory=tm8enk&onyxia.friendlyName=«1_Intro_spark»"
            },
            {
                "name": "2. Datalake S3",
                "abstract": "Faire du spark avec comme source et destination un système de fichier hadoop compatible : S3",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "datascience with R and Python",
                "imageUrl": python_jpg_2["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=edit&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh&vault.secret=diffusion/spark-lab/2-datalake&vault.directory=tm8enk&onyxia.friendlyName=«2_Datalake»"
            },
            {
                "name": "2.2 Données chiffrées sur S3",
                "abstract": "Utiliser une donnée chiffrée sur S3, définir vos propres clés de chiffrement avec les clés de chiffrement fournies par Vault (SSE-C).",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "datascience with R and Python",
                "imageUrl": vault_svg_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=edit&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh&vault.secret=diffusion/spark-lab/2b-vault-s3-sseC&vault.directory=tm8enk&onyxia.friendlyName=«2b_vault-s3-sseC»"
            },
            {
                "name": "3. Spark et Kubernetes",
                "abstract": "Faire du Spark avec un cluster Spark sur Kubernetes et notion de lazy evaluation, transformation et action",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "datascience with R and Python",
                "imageUrl": kub_png_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=edit&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh&vault.secret=diffusion/spark-lab/3-spark-kubernetes&vault.directory=tm8enk&onyxia.friendlyName=«3_Spark_Kubernetes»"
            },
            {
                "name": "3.2 Allocation Dynamique Kubernetes",
                "abstract": "Faire du spark avec un nombre d'executeur variable en fonction de votre besoin",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "datascience with R and Python",
                "imageUrl": kub_png_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=edit&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh&vault.secret=diffusion/spark-lab/3b-dynamic-allocation&vault.directory=tm8enk&onyxia.friendlyName=«3_Dynamic_allocation»"
            },
            {
                "name": "4. Le format de données parquet",
                "abstract": "Notion de partitions et format parquet",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "datascience with R and Python",
                "imageUrl": spark_png_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=edit&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh&vault.secret=diffusion/spark-lab/4-format-parquet&vault.directory=tm8enk&onyxia.friendlyName=«4_format_parquet»"
            },
            {
                "name": "5. Hive-metastore et metadonnées",
                "abstract": "Metadonnées des tables d'un datalake",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "datascience with R and Python",
                "imageUrl": hive_svg_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=edit&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh&vault.secret=diffusion/spark-lab/5-hive-metastore&vault.directory=tm8enk&onyxia.friendlyName=«5_hive_metastore»"
            },
            {
                "name": "6. Spark-thrift et redash",
                "abstract": "Et si on faisait simplement du SQL en externalisant le driver spark et un outil de visualisation : redash",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "datascience with R and Python",
                "imageUrl": redash_svg_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh&vault.secret=diffusion/spark-lab/6-spark-thrift-server&vault.directory=tm8enk&onyxia.friendlyName=«6_spark_thrift_server»"
            },
            {
                "name": "7. Spark streaming",
                "abstract": "Analyse de tweets. Notions de batch, micro-batch, streaming tout dépend de la vélocité recherchée.",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "datascience with R and Python",
                "imageUrl": spark_png_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=edit&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh&vault.secret=diffusion/spark-lab/7-spark-streaming&vault.directory=tm8enk&onyxia.friendlyName=«7_spark_streaming»"
            },
            {
                "name": "8. Spark Graphx",
                "abstract": "Analyse de tweets avec l'utilisation de graph Spark",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "datascience with R and Python",
                "imageUrl": spark_png_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=edit&init.personalInit=https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh&vault.secret=diffusion/spark-lab/8-spark-graphx&vault.directory=tm8enk&onyxia.friendlyName=«8_spark_graphx»"
            },
        ]
    },
    {
        "name": "Analyse Textuelle",
        "abstract": "Initiation à l'analyse textuelle",
        "parts": [
            {
                "name": "Analyse article R",
                "abstract": "Analyser un corpus d'articles du journal Le Monde. Prétraiter (nettoyer, normaliser) les données afin de pouvoir en extraire de l'information, description du vocabulaire, identifier des thèmes ou la polarité du texte (négatif, positif)",
                "authors": ["SSPLAB"],
                "contributors": [
                    "Stéphanie Himpens, Milena Suarez Castillo, Stéphanie Combes, Benjamin Sakarovitch",
                ],
                "types": ["Tutoriel R"],
                "tags": ["discover", "learn"],
                "category": "datascience with R and Python",
                "imageUrl": rstudio_png_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&init.personalInit=https://git.lab.sspcloud.fr/ssplab/formation_text_mining_public/-/raw/master/installR.sh&onyxia.friendlyName=«Text_Mining_R»"
            },
            {
                "name": "Analyse article Python",
                "abstract": "Analyser un corpus d'articles du journal Le Monde. Prétraiter (nettoyer, normaliser) les données afin de pouvoir en extraire de l'information, description du vocabulaire, identifier des thèmes ou la polarité du texte (négatif, positif)",
                "authors": ["SSPLAB"],
                "contributors": [
                    "Stéphanie Himpens, Milena Suarez Castillo, Stéphanie Combes, Benjamin Sakarovitch",
                ],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "datascience with R and Python",
                "imageUrl": python_jpg_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&init.personalInit=https://git.lab.sspcloud.fr/ssplab/formation_text_mining_public/-/raw/master/installPy.sh&onyxia.friendlyName=«Text_Mining_Python»"
            },
            {
                "name": "Appariemment Flou et Elastic",
                "abstract": "Calculer les calories d'une recette de cuisine en cherchant les produits dans Elastic",
                "authors": [""],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "datascience with R and Python",
                "imageUrl": elk_png_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABFuzzyMatchElasticInitiation%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fgit.lab.sspcloud.fr%2Fhby7ih%2Fhandsonelastic%2F-%2Fraw%2Fmaster%2Finit.sh%C2%BB&resources.requests.memory=%C2%AB10512Mi%C2%BB&security.allowlist.enabled=false&persistence.enabled=false&discovery.hive=false"
            },
        ]
    },
    {
        "name": "Documentation UtilitR",
        "abstract": "Une documentation collaborative et open source sur R, destinée en premier lieu aux agents de l’Insee.",
        "imageUrl": utilitr_png_1["default"],
        "parts": [
            {
                "name": "Comment utiliser la documentation utilitR",
                "abstract": "Le projet utilitR vise à produire une documentation collaborative et open source sur R, destinée en premier lieu aux agents de l’Insee. ",
                "authors": ["UtilitR"],
                "types": ["Tutoriel R"],
                "tags": ["discover"],
                "category": "statistics with R",
                "imageUrl": utilitr_png_1["default"],
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                "articleUrl": "https://www.book.utilitr.org/presentation-utilitr.html"
            },
            {
                "name": "Utiliser R à l’Insee",
                "abstract": "Les environnement de référence de l’Insee pour réaliser des tâches de production statistique et des études avec R et RStudio.",
                "imageUrl": utilitr_png_1["default"],
                "parts": [
                    {
                        "name": "Utiliser RStudio sur l’environnement AUSv3",
                        "abstract": "Les collections AUSv3 sont les environnements de référence pour réaliser des tâches de production statistique et des études avec R et RStudio à l’Insee.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/ausv3"
                    },
                    {
                        "name": "Utiliser RStudio sur l’environnement SSP Cloud",
                        "abstract": "Utiliser R et RStudio sur le datalab du SSP Cloud pour mener des expérimentations sur données ouvertes.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/sspcloud.html"
                    },
                    {
                        "name": "Configurer Git sur son poste de travail",
                        "abstract": "Versionner son projet depuis son poste de travail en ayant recours à un dépôt distant, disponible sur GitLab ou GitHub.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/git-config.html"
                    },
                    {
                        "name": "Personnaliser la configuration de R",
                        "abstract": "Définir certaines actions ou valeurs qui seront effectuées automatiquement à l’ouverture d’une session R.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/personnaliser.html"
                    },
                    {
                        "name": " Superviser sa session R",
                        "abstract": "Les bonnes pratiques pour faire un bon usage de ces ressources er ne pas gêner le travail des autres applications ou utilisateurs.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/personnaliser.html"
                    },
                ]
            },
            {
                "name": "Mener un projet statistique avec R",
                "abstract": "Mener des projets de traitement statistique reproductible, collaboratif et avec une bonne organisation du travail.",
                "imageUrl": utilitr_png_1["default"],
                "parts": [
                    {
                        "name": "Utiliser les projets RStudio",
                        "abstract": "Rassembler tous les éléments de contexte propres à un projet : espace de travail, historique de commandes, variables d’environnement, options de R, etc.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/rproject.html"
                    },
                    {
                        "name": "Utiliser Git avec RStudio",
                        "abstract": "Collaborer, suivre les modifications et contrôler les versions d’un projet RStudio.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/git.html"
                    },
                    {
                        "name": "Utiliser des packages R",
                        "abstract": "Ajouter des fonctions développées par des utilisateurs de R sous forme de package.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/utiliser-packages.html"
                    },
                    {
                        "name": "Comment choisir un package?",
                        "abstract": "Déterminer si un package déjà existant répond à votre besoin et si vous pouvez l’utiliser.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/choisir-package.html"
                    },
                    {
                        "name": "Gérer les dépendances",
                        "abstract": "Méthodes pour déclarer et gérer les dépendances avec R lorsqu’on partage ses programmes.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/gerer-dependances.html"
                    },
                    {
                        "name": "Se documenter sur R",
                        "abstract": "Recommandations pour se retrouver dans la documentation luxuriante de R.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/se-documenter-sur-r.html"
                    },
                    {
                        "name": "Résoudre un problème avec R",
                        "abstract": "Comment isoler le problème et comment demander de l’aide.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/r%C3%A9soudre-un-probl%C3%A8me-avec-r.html"
                    },
                ]
            },
            {
                "name": "Importer des données avec R",
                "abstract": "Quelques techniques d’importation de données dans R.",
                "imageUrl": utilitr_png_1["default"],
                "parts": [
                    {
                        "name": "Importer des fichiers plats",
                        "abstract": "Importer dans R des données stockées sous forme de fichiers plats (formats .txt, .csv, .tsv).",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/importcsv.html"
                    },
                    {
                        "name": "Importer des tables SAS®",
                        "abstract": "Méthodes d’importation dans R de données stockées sous forme de tables SAS.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/importsas.html"
                    },
                    {
                        "name": "Importer des fichiers issus de tableurs (Excel, Calc)",
                        "abstract": "Importer dans R des données issues de tableurs (extension type xls, xlsx ou ods).",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/importxl.html"
                    },
                    {
                        "name": "Travailler avec des API",
                        "abstract": "Accéder à des données via une API.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/api.html"
                    },
                    {
                        "name": "Se connecter à une base de données",
                        "abstract": "Accéder à des données stockées dans une base de données (sous forme Oracle, PostgreSQL, etc.).",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/bdd.html"
                    },
                ]
            },
            {
                "name": "Manipuler des données avec R",
                "abstract": "Manipuler des données stucturées sous forme de data.frame.L’utilisateur souhaite manipuler des données stucturées sous forme de data.frame.",
                "imageUrl": utilitr_png_1["default"],
                "parts": [
                    {
                        "name": "Manipuler des données avec le tidyverse",
                        "abstract": "Manipuler des données stucturées sous forme de data.frame avec tidyverse.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/tidyverse.html"
                    },
                    {
                        "name": "Manipuler des données avec data.table",
                        "abstract": "Manipuler des données stucturées sous forme de data.frame avec data.table.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/datatable.html"
                    },
                    {
                        "name": "Joindre des tables de données",
                        "abstract": "Apparier deux tables de données selon une ou plusieurs variables de jointure.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/jointures.html"
                    },
                    {
                        "name": "Manipuler des données textuelles",
                        "abstract": "Manipuler du texte (repérer et extraire une chaîne de caractères, concaténer, remplacer une chaîne par une autre, modifier la casse, etc.).",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/textdata.html"
                    },
                    {
                        "name": "Utiliser des données d’enquêtes",
                        "abstract": "Exploiter des données d’enquête pour calculer des indicateurs.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/surveydata.html"
                    },
                    {
                        "name": "Manipuler des données spatiales",
                        "abstract": "Traiter avec R des données spatiales (données géolocalisées, polygones, etc.).",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/spatdata.html"
                    },
                    {
                        "name": "L’analyse de données (ACP, ACM, ACF…)",
                        "abstract": "Méthodes classiques d’analyse de données (composantes principales, correspondances multiples, l’analyse factorielle des correspondance, etc.)",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/acp.html"
                    },
                ]
            },
            {
                "name": "Superviser sa session R",
                "abstract": "Les bonnes pratiques pour faire un bon usage de ces ressources er ne pas gêner le travail des autres applications ou utilisateurs.",
                "imageUrl": utilitr_png_1["default"],
                "parts": [
                    {
                        "name": "Faire des graphiques avec ggplot2",
                        "abstract": "Réaliser des graphiques (nuages de points, histogrammes, densité, etc.) et les personnaliser (légendes, titres, échelles, etc.).",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/ggplot2.html"
                    },
                    {
                        "name": "Produire des documents avec R Markdown",
                        "abstract": "Produire avec R des documents contenant à la fois du texte, des extraits de code R et les résultats de l’exécution de programmes.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/rmarkdown.html"
                    },
                    {
                        "name": "Rapports automatisés avec R Markdown",
                        "abstract": "Produire un ou plusieurs rapports automatisés, reproductibles, faciles à actualiser en cas de modification des données et en faisant varier des paramètres.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "statistics with R",
                        "imageUrl": utilitr_png_1["default"],
                        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/rapports-auto.html"
                    },
                ]
            },
        ]
    },
    {
        "name": "Découverte du datalab",
        "abstract": "Introduction et visite guidée du datalab.",
        "authors": ["Inseefrlab"],
        "contributors": ["Inseefrlab"],
        "types": ["Tutoriel"],
        "tags": ["discover"],
        "category": "step by step with the datalab",
        "imageUrl": Onyxia_png_1["default"],
        "articleUrl": "https://docs.sspcloud.fr/onyxia-guide/decouverte-du-datalab"
    },
    {
        "name": "Démarrer rapidement un service",
        "abstract": "Pas à pas pour lancer rapidement un service avec le datalab.",
        "authors": ["Inseefrlab"],
        "contributors": ["Inseefrlab"],
        "types": ["Tutoriel"],
        "tags": ["discover", "learn"],
        "category": "step by step with the datalab",
        "imageUrl": Onyxia_png_1["default"],
        "articleUrl": "https://docs.sspcloud.fr/onyxia-guide/lancer-un-service"
    },
    {
        "name": "Importer des données",
        "abstract": "Pas à pas pour importer, partager et utiliser des données ouvertes avec le datalab.",
        "authors": ["Inseefrlab"],
        "contributors": ["Inseefrlab"],
        "types": ["Tutoriel"],
        "tags": ["discover", "learn"],
        "category": "step by step with the datalab",
        "imageUrl": Onyxia_png_1["default"],
        "articleUrl": "https://docs.sspcloud.fr/onyxia-guide/importer-des-donnees"
    },
    {
        "name": "Lancer un projet R avec le datalab",
        "abstract": "Courte démonstration pour lancer un projet R avec le datalab.",
        "authors": ["Inseefrlab"],
        "contributors": ["Inseefrlab"],
        "types": ["Tutoriel"],
        "tags": ["learn"],
        "category": "step by step with the datalab",
        "imageUrl": Onyxia_png_1["default"],
        "articleUrl": "https://docs.sspcloud.fr/onyxia-guide/projet-de-demonstration-r-avec-onyxia"
    },
    {
        "name": "Utiliser des secrets",
        "abstract": "Pas à pas pour utiliser des secrets en tant que variables d’environnement avec le datalab.",
        "authors": ["Inseefrlab"],
        "contributors": ["Inseefrlab"],
        "types": ["Tutoriel"],
        "tags": ["learn", "consolidate"],
        "category": "step by step with the datalab",
        "imageUrl": Onyxia_png_1["default"],
        "articleUrl": "https://docs.sspcloud.fr/onyxia-guide/utiliser-des-variables-denvironnement"
    },
    {
        "name": "Configurer un service",
        "abstract": "Quelques recommandations et bonnes pratiques pour personnaliser les configurations de son servce",
        "authors": ["Inseefrlab"],
        "contributors": ["Inseefrlab"],
        "types": ["Tutoriel"],
        "tags": ["learn", "consolidate"],
        "category": "step by step with the datalab",
        "imageUrl": Onyxia_png_1["default"],
        "articleUrl": "https://docs.sspcloud.fr/onyxia-guide/configurer-un-service"
    },
];