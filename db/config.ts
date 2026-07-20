import { defineDb } from "astro:db";
import { Artifact } from "./scheme/artifact";
import { ArtifactTranslation } from "./scheme/artifact-translation";
import { City } from "./scheme/city";
import { Culture } from "./scheme/culture";
import { CultureTranslation } from "./scheme/culture-translation";
import { Culinary } from "./scheme/culinary";
import { CulinaryTranslation } from "./scheme/culinary-translation";
import { History } from "./scheme/history";
import { HistoryTranslation } from "./scheme/history-translation";
import { Destination } from "./scheme/destination";
import { DestinationTranslation } from "./scheme/destination-translation";

// https://astro.build/db/config
export default defineDb({
  tables: {
    Artifact,
    ArtifactTranslation,
    City,
    Culture,
    CultureTranslation,
    Culinary,
    CulinaryTranslation,
    History,
    HistoryTranslation,
    Destination,
    DestinationTranslation,
  },
});

