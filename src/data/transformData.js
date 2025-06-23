import phase1Data from '../json/phase_1.json';
import phase2Data from '../json/phase_2.json';
import phase3Data from '../json/phase_3.json';
import phase4Data from '../json/phase_4.json';
import phase5Data from '../json/phase_5.json';


const findMediaUrl = (fileName, phase = null) => {
  if (!fileName) return null;
  

    // For phase 1, map to organized structure
    if (phase === 1) {
      return `/media/phase_1/${fileName}`;
    }
    
    // For phase 2, map to organized structure
    if (phase === 2) {
      return `/media/phase_2/${fileName}`;
    }
    
    // For phase 3, map to organized structure
    if (phase === 3) {
      return `/media/phase_3/${fileName}`;
    }
    
    // For phase 4, map to organized structure
    if (phase === 4) {
      return `/media/phase_4/${fileName}`;
    }
    
    // For phase 5, map to organized structure
    if (phase === 5) {
      return `/media/phase_5/${fileName}`;
    }
    
    // Fallback to new media structure
    return `/media/${filePath}`;
    
};

const transformPhase1Data = (data) => {
  return data.map(entry => ({
    nate: {
      sound_title: entry.nate.nate_sound_title,
      audio: findMediaUrl(entry.nate.nate_audio, 1),
      color: entry.nate.nate_color,
      description: entry.nate.nate_description
    },
    sanju: {
      sound_title: entry.sanju.sanju_sound_title,
      audio: findMediaUrl(entry.sanju.sanju_audio, 1),
      color: entry.sanju.sanju_color,
      description: entry.sanju.sanju_description
    }
  }));
};

const transformPhase2Data = (data) => {
  return data.map(week => 
    week.map(panel => ({
      img: {
        src: findMediaUrl(panel.img.large, 2),
        thumbnail: findMediaUrl(panel.img.thumbnail, 2),
        alt: `Panel by ${panel.credit}`
      },
      credit: panel.credit
    }))
  );
};

const transformPhase3Data = (data) => {
  return data.map(entry => ({
    image: {
      src: findMediaUrl(entry.image.large, 3),
      thumbnail: findMediaUrl(entry.image.thumbnail, 3),
      credit: entry.image_credit
    },
    nate: {
      title: entry.nate.nate_title,
      response: entry.nate.nate_response
    },
    sanju: {
      title: entry.sanju.sanju_title,
      response: entry.sanju.sanju_response
    }
  }));
};

const transformPhase4Data = (data) => {
  return data.map(entry => ({
    title: entry.title,
    author: entry.author,
    object_photo: {
      src: findMediaUrl(entry.object_photo.large || entry.object_photo['1536x1536'], 4),
      thumbnail: findMediaUrl(entry.object_photo.thumbnail, 4)
    },
    highlight_color: entry.highlight_color,
    story: entry.story
  }));
};

const transformPhase5Data = (data) => {
  return data.map(entry => ({
    audio_file: findMediaUrl(entry.audio_file, 5),
    description: entry.description,
    title: entry.title,
    author: entry.author
  }));
};

export const phaseData = {
  phase1: transformPhase1Data(phase1Data),
  phase2: transformPhase2Data(phase2Data),
  phase3: transformPhase3Data(phase3Data),
  phase4: transformPhase4Data(phase4Data),
  phase5: transformPhase5Data(phase5Data),
  phase6: [] // Placeholder for Phase 6 - no data available
};

export default phaseData;