/**
 * Poor Guy KOs Poison Needle! Saves Heiress!
 * High-Retention Cinematic Short Film Controller & Production Dashboard
 *
 * Characters:
 * - Rescuer / Hero: Master John (Penniless worker with hidden grandmaster reflexes)
 * - Billionaire Heiress: Susan (Heiress Susan Lin of the Grand Horizon Conglomerate)
 * - Mastermind / Syndicate Leader: Master Sam (Ruthless tycoon who sent the poison needle assassin)
 */

// ==========================================================================
// SCENES DATA & TIMELINE DEFINITIONS (48s Total Duration)
// ==========================================================================
const SCENES = [
  {
    id: 1,
    title: "Scene 1: The Setup",
    timeStart: 0,
    timeEnd: 6,
    duration: 6,
    image: "assets/scene1_the_setup.jpg",
    animClass: "anim-kenburns-1",
    lens: "35mm Anamorphic T1.4 • ISO 640",
    cameraMove: "Slow forward tracking push-in following Susan, reveal Master Sam's assassin in foreground shadow",
    lighting: "Warm golden chandelier key, cold blue architectural glass background fill",
    speaker: "LOBBY • HOTEL RECEPTION",
    subtitleEn: "Billionaire Heiress Susan walks through the hotel under high security, unaware Master Sam has sent an assassin...",
    subtitleCn: "百亿千金苏珊在保镖护卫下步入大堂，殊不知萨姆大师已布下绝命杀局...",
    narration: "Billionaire Heiress Susan thought she was untouchable, surrounded by elite guards in a luxury hotel. But she didn't know... Master Sam had dispatched his deadliest assassin to eliminate her!",
    dialogue: "Assassin: 'Master Sam sends his regards, Susan...'",
    sfxTrigger: "drone",
    desc: "Billionaire Heiress Susan walks through the lobby of a luxurious hotel surrounded by bodyguards. She looks elegant and confident. An assassin secretly approaches from behind on orders from Master Sam, hiding a tiny poison needle between his fingers.",
    prompts: {
      kling: "Cinematic vertical 9:16 video. Slow tracking push-in following an ultra-elegant young Chinese billionaire heiress Susan in an ivory tailored suit walking gracefully across a grand luxury hotel marble lobby, two tall black-suited bodyguards flanking her. In the blurred foreground, a sinister assassin sent by Master Sam stealthily approaches, hiding a lethal silver poison needle between his gloved fingers. Realistic fabric motion, natural strides, cinematic lighting, 4k. [Camera: Push in + slow pan right]",
      runway: "Vertical 9:16 cinematic movie scene. Slow steady dolly shot pushing toward billionaire heiress Susan walking with two bodyguards in a high-ceiling 5-star hotel lobby. In extreme foreground, dark trench coat assassin slips a gleaming poison needle into his knuckles on Master Sam's orders. High dynamic range, film grain, photorealistic, 24fps.",
      luma: "A luxurious modern hotel lobby, high ceiling, golden chandeliers. Elegant billionaire heiress Susan in ivory couture walking with bodyguards. A mysterious assassin stalks closely behind holding a concealed poison needle. Photorealistic motion, dramatic movie cinematography, 9:16.",
      midjourney: "Cinematic vertical 9:16 movie still. A breathtakingly elegant young Chinese billionaire heiress Susan walking across a luxury hotel lobby flanked by bodyguards, assassin in blurred foreground holding silver needle, 35mm lens, golden hour hotel lighting, photorealistic --ar 9:16 --v 6.1"
    }
  },
  {
    id: 2,
    title: "Scene 2: The Attack & Intercept",
    timeStart: 6,
    timeEnd: 13,
    duration: 7,
    image: "assets/scene2_the_attack.jpg",
    animClass: "anim-kenburns-2",
    lens: "85mm Macro T1.8 • Ultra Slow-Mo 120fps",
    cameraMove: "Extreme macro whip-pan to needle, locked freeze-frame slow motion",
    lighting: "Harsh rim light accentuating the gleaming green-tipped needle and John's calloused hand",
    speaker: "CLOSE ENCOUNTER • SPLIT SECOND",
    subtitleEn: "Inches from Susan's neck! Master John's calloused hand locks the assassin's wrist like iron!",
    subtitleCn: "毒针逼近苏珊喉前半寸！约翰大师粗糙铁掌电光火石扼住杀手手腕！",
    narration: "With lightning speed, the lethal poison needle lunges toward Susan's neck! But in a split second, a poor worker named John steps in, locking the assassin's wrist with iron strength!",
    dialogue: "Heiress Susan: 'What—?!' | Master John: 'Not on my watch.'",
    sfxTrigger: "needle",
    desc: "Just as Master Sam's attacker prepares to strike Susan with the poison needle, a poorly dressed young worker, Master John, reacts with superhuman reflexes. He intercepts the wrist, halting the venomous needle two inches from Susan's face.",
    prompts: {
      kling: "Vertical 9:16 slow-motion close-up. A lethal silver poison needle tipped with a glistening toxic droplet stops just two inches away from the neck of a shocked Chinese heiress Susan in an ivory suit. A poor young Chinese worker Master John in a faded dusty navy jacket with strong calloused hands grips the black leather gloved wrist of Master Sam's attacker with immense torque. Extreme shallow depth of field, high tension, cinematic lighting, 4K. [Motion: Slow-mo freeze, subtle breathing, eye tremor]",
      runway: "Macro action shot in 9:16. Hand of humble worker Master John in worn blue denim violently grabs assassin's leather glove, stopping a glistening poison needle centimeters away from billionaire heiress Susan's cheek. Susan's eyes dilate in shock. Volumetric lighting, 120fps ultra slow motion, cinematic realism.",
      luma: "Extreme slow motion, 9:16 aspect ratio. Young worker Master John's rugged hand violently intercepts Master Sam's assassin wrist. A lethal syringe needle quivers mid-air near Heiress Susan's face. Photorealistic tension, movie grade.",
      midjourney: "Cinematic vertical 9:16 dramatic macro close-up. Silver poison needle stopped frozen two inches from Heiress Susan's face, gripped by rugged worker Master John's calloused hand, high tension, photorealistic --ar 9:16 --v 6.1"
    }
  },
  {
    id: 3,
    title: "Scene 3: The Fight & Knockout",
    timeStart: 13,
    timeEnd: 21,
    duration: 8,
    image: "assets/scene3_the_fight_ko.jpg",
    animClass: "anim-kenburns-3",
    lens: "24mm Wide Angle T2.0 • Shutter 1/96s",
    cameraMove: "Dynamic low-angle whip counter-turn, snap zoom on punch impact",
    lighting: "Hard strobe flash on impact, glistening sweat droplets, luxury chandeliers",
    speaker: "MASTER JOHN • THE KNOCKOUT",
    subtitleEn: "Incredible mastery! Master John counters with thunderous power, knocking Master Sam's hitman cold!",
    subtitleCn: "绝世身手初显！约翰大师行云流水反击，一记雷霆重拳将萨姆大师的死士凌空击溃！",
    narration: "The assassin strikes with deadly fury! But John dodges with effortless grace and lands a devastating counter-strike to the jaw! BOOM! Master Sam's top killer is knocked cold across the marble floor!",
    dialogue: "Assassin: 'Die, beggar!' | Master John: 'Too slow.'",
    sfxTrigger: "punch",
    desc: "The attacker aggressively attacks Master John. Despite his worn worker clothes, John unleashes master-tier martial arts. He evades two lethal blows and delivers a crushing knockout punch to the attacker's jaw, sending him flying.",
    prompts: {
      kling: "Vertical 9:16 fast-paced martial arts combat. Humble Chinese worker Master John in a worn dusty navy jacket slips two fast punches from Master Sam's suited attacker, counters with explosive speed, and executes a devastating knockout punch directly to the attacker's jaw in the hotel lobby. The attacker's head snaps back with airborne saliva particles as he collapses to the marble floor. Dutch angle, kinetic camera shake, photorealistic, 4K action. [Motion: Fast dodge then explosive impact]",
      runway: "Dynamic 9:16 action cinematography. Low angle tracking shot of poor young worker Master John executing a lightning-fast counter-attack punch against Master Sam's suited assassin in a luxurious marble hall. Shockwave impact, attacker flies backward onto the floor, stunned bodyguards in background. Movie stunt realism.",
      luma: "Intense hand-to-hand combat in luxury hotel lobby, 9:16. Rugged humble worker Master John dodges strike and delivers a crushing knockout punch to Master Sam's assassin. Realistic physics, martial arts choreography, 4K quality.",
      midjourney: "Cinematic vertical 9:16 dynamic action shot. Chinese worker Master John in dusty jacket lands a crushing knockout punch on Master Sam's suited attacker in luxury marble lobby, attacker flying back, photorealistic --ar 9:16 --v 6.1"
    }
  },
  {
    id: 4,
    title: "Scene 4: Saving the Heiress",
    timeStart: 21,
    timeEnd: 28,
    duration: 7,
    image: "assets/scene4_saving_heiress.jpg",
    animClass: "anim-kenburns-4",
    lens: "50mm Prime T1.2 • Soft Bokeh",
    cameraMove: "Gentle orbital arc around the couple, warm floating bokeh",
    lighting: "Intimate golden halo rim lighting, glowing hotel chandelier background",
    speaker: "SUSAN & JOHN • EYES LOCK",
    subtitleEn: "Susan stumbles in shock, falling into John's arms. Their eyes lock in disbelief and gratitude...",
    subtitleCn: "惊魂未定的苏珊踉跄跌入约翰怀中。金碧辉煌的大堂下，四目相对，情愫暗涌...",
    narration: "Trembling from the near-fatal shock, Heiress Susan loses her balance. Master John catches her gently in his strong arms. As their eyes lock beneath the golden chandeliers, Susan realizes this humble man just saved her life!",
    dialogue: "Heiress Susan: 'You... you saved me?' | Master John: 'Careful, Miss Susan. You are safe.'",
    sfxTrigger: "romantic",
    desc: "Heiress Susan nearly collapses from the shock. Master John catches her before she falls. Their eyes meet in an intense, emotional gaze. Susan is overwhelmed by gratitude and captivated by this ordinary worker.",
    prompts: {
      kling: "Vertical 9:16 romantic drama shot. The stunning Chinese billionaire heiress Susan in her ivory suit stumbles backward in breathless shock and is caught gently yet firmly around the waist by the rugged young worker Master John in his faded dusty blue jacket. Their eyes lock in an electrifying, tender, emotional gaze. Dust motes dancing in warm golden hotel chandelier light, shallow depth of field, romantic chemistry, 4K. [Motion: Slow arc tilt, gentle breathing]",
      runway: "Medium close-up 9:16. An elegant billionaire heiress Susan nearly collapses from fright, caught securely in mid-air by the rugged worker Master John. Close intimate eye contact, rapid heartbeats, luxury hotel background blurred into golden bokeh circles. High-budget romance series aesthetic.",
      luma: "Emotional movie still in motion, 9:16. Poor humble worker Master John catches beautiful fainting heiress Susan in high-end hotel lobby. Intense romantic tension, cinematic lighting, photorealistic facial expressions.",
      midjourney: "Cinematic vertical 9:16 emotional mid-shot. Billionaire heiress Susan caught in mid-air by poor Chinese worker Master John in dusty jacket, eyes meeting in shock and gratitude, golden bokeh --ar 9:16 --v 6.1"
    }
  },
  {
    id: 5,
    title: "Scene 5: The Revelation",
    timeStart: 28,
    timeEnd: 36,
    duration: 8,
    image: "assets/scene5_the_revelation.jpg",
    animClass: "anim-kenburns-5",
    lens: "35mm T2.0 • Medium Shot",
    cameraMove: "Slow crane tilt up from pinned assassin to Master John's calm dignity",
    lighting: "Balanced prestige drama lighting, contrast between humble worker and elite wealth",
    speaker: "THE AFTERMATH • MASTER JOHN",
    subtitleEn: "Susan: 'Master Sam sent him! Who are you?' John: 'Just a worker doing what's right.'",
    subtitleCn: "苏珊：'这是萨姆大师的死士！你究竟是何人？' 约翰：'举手之劳，不足挂齿。'",
    narration: "Bodyguards pin down the hitman, identifying him as Master Sam's top operative! Overcome with gratitude and awe, Susan approaches John, asking who he is and why he risked everything for her.",
    dialogue: "Bodyguard: 'Miss Susan, this hitman belongs to Master Sam!' | Heiress Susan: 'Who are you really, John?' | Master John: 'I'm just a man who did what anyone should do.'",
    sfxTrigger: "drone",
    desc: "Her bodyguards rush over and secure the defeated attacker on the marble floor. Heiress Susan looks at John with deep gratitude and disbelief, asking who he truly is. Master John replies with calm humility.",
    prompts: {
      kling: "Vertical 9:16 dramatic scene. In the background of a luxury marble lobby, black-suited bodyguards violently pin the unconscious assassin sent by Master Sam to the ground. In the foreground, the beautiful Chinese heiress Susan in an ivory suit clasps her hands to her chest, looking up at the poor young worker Master John with profound gratitude. Master John calmly dusts off his worn navy jacket with modest dignity. 4K quality, TV drama cinematography. [Motion: Slow tilt up, ambient motion in background]",
      runway: "9:16 cinematic medium shot. Bodyguards restrain Master Sam's defeated attacker on the polished floor while billionaire heiress Susan gazes emotionally at the poor laborer Master John who saved her. John shrugs humbly with calm eyes. Realistic expressions, cinematic color grade.",
      luma: "Drama sequence in 9:16. Subdued lighting in hotel lobby. Heiress Susan speaking gratefully to worker Master John who saved her from Master Sam's assassin. Realistic dialogue posture, subtle emotion, 4K film quality.",
      midjourney: "Cinematic vertical 9:16 mid-shot. Bodyguards pinning unconscious assassin on marble floor, Heiress Susan looking up with gratitude at humble poor worker Master John dusting his jacket, photorealistic --ar 9:16 --v 6.1"
    }
  },
  {
    id: 6,
    title: "Scene 6: The Shocking Offer",
    timeStart: 36,
    timeEnd: 44,
    duration: 8,
    image: "assets/scene6_shocking_offer.jpg",
    animClass: "anim-kenburns-6",
    lens: "50mm T1.4 • High Contrast Depth",
    cameraMove: "Slow dramatic push-in to the Black Card, rack focus to stunned bodyguards",
    lighting: "Authoritative rim spotlight on Susan, golden reflective shimmer",
    speaker: "THE PROPOSITION • BLACK VIP CARD",
    subtitleEn: "Susan: 'Name your salary, John! Become my Chief Personal Protector against Master Sam!'",
    subtitleCn: "苏珊递出黑金至尊卡：'约翰，做我的首席特卫！无论萨姆大师多强，由你全权守护！'",
    narration: "Deeply impressed by his courage and skill, Susan pulls out her limitless Black VIP Card! In front of her stunned bodyguards, she offers John an extraordinary fortune to become her Chief Personal Protector against Master Sam!",
    dialogue: "Heiress Susan: 'Ten million a year. All resources are yours. Protect me from Master Sam!' | Master John: 'Miss Susan... I am only a maintenance worker.'",
    sfxTrigger: "cliffhanger",
    desc: "Heiress Susan is profoundly impressed. She offers Master John a limitless black titanium credit card and an executive contract to become her personal security specialist and protector against Master Sam. John freezes in shock.",
    prompts: {
      kling: "Vertical 9:16 high-stakes drama. The elegant Chinese heiress Susan in her ivory suit stands with imperial authority, holding out an exclusive black titanium card to the poor young worker Master John. Behind them, black-suited bodyguards gawk with open mouths in utter disbelief. Master John stares in stunned amazement. Dramatic lighting, razor sharp focus, cinematic micro-expressions, 4K. [Motion: Slow push-in toward the black card and faces]",
      runway: "Vertical 9:16 prestige TV drama shot. Billionaire heiress Susan authoritatively offers an elite VIP card and life-changing contract to poor dusty worker Master John. Background bodyguards shocked. High dynamic range, cinematic lighting, photorealistic.",
      luma: "Cinematic close confrontation, 9:16. Chinese heiress Susan offering limitless black credit card to worker Master John. Stunned reaction faces, high tension, ultra-detailed skin textures.",
      midjourney: "Cinematic vertical 9:16 dramatic confrontation scene. Elegant Chinese billionaire heiress Susan holds out black VIP card offering life-changing security chief job to Master John, bodyguards shocked in background --ar 9:16 --v 6.1"
    }
  },
  {
    id: 7,
    title: "Scene 7: Cliffhanger",
    timeStart: 44,
    timeEnd: 48,
    duration: 4,
    image: "assets/scene7_cliffhanger.jpg",
    animClass: "anim-kenburns-7",
    lens: "35mm T1.4 • Dramatic Wide-Angle Freeze",
    cameraMove: "Slow forward drift toward Susan's outstretched hand",
    lighting: "Chiaroscuro golden hour hotel lighting, suspenseful shadow play",
    speaker: "CLIFFHANGER • DESTINY'S HANDSHAKE",
    subtitleEn: "Susan extends her hand: 'From today, you work for me.' Will Master John accept?!",
    subtitleCn: "苏珊伸出玉手：'从今天起，你由我直接统领！' 约翰凝视玉手，他会接下这生死之盟吗？！",
    narration: "Susan extends her hand toward John. With Master Sam hunting her, John's decision will change everything! Will Master John accept the heiress's offer, or will he walk away into the shadows?!",
    dialogue: "Heiress Susan: 'Do we have a deal, Master John?' | Narrator: 'Follow and like for Part 2!'",
    sfxTrigger: "cliffhanger",
    desc: "Heiress Susan extends her hand toward Master John, declaring that from this day forward he will answer only to her. Master John gazes at her hand and the golden luxury surroundings, stunned by the turning point in his life. Cliffhanger freeze frame.",
    prompts: {
      kling: "Vertical 9:16 cinematic cliffhanger freeze-frame. The gorgeous Chinese heiress Susan in her ivory tailored suit extends her manicured hand forward for a fateful handshake. The poor Chinese worker Master John in his worn blue denim jacket stares down at her hand, overwhelmed by disbelief as the entire hotel watches in breathless silence. Suspenseful cinematic freeze, golden bokeh, 4K quality. [Motion: Micro slow-mo forward drift, cliffhanger hold]",
      runway: "9:16 dramatic cliffhanger. Close shot of Heiress Susan's outstretched manicured hand offering a partnership, with poor worker Master John's stunned eyes locked onto it. Dramatic suspension of time, high-contrast movie grade lighting, 4K.",
      luma: "Cliffhanger moment in 9:16. Beautiful heiress Susan extends hand to hero Master John. Intense emotional hesitation, cinematic bokeh, end title suspense.",
      midjourney: "Cinematic vertical 9:16 dramatic cliffhanger shot. Chinese heiress Susan in ivory suit extends manicured hand for fateful handshake, Master John staring in shock, luxury hotel lighting --ar 9:16 --v 6.1"
    }
  }
];

// ==========================================================================
// WEBAUDIO REAL-TIME CINEMATIC SOUND & SYNTHESIZER ENGINE
// ==========================================================================
class CinematicAudioEngine {
  constructor() {
    this.ctx = null;
    this.droneGain = null;
    this.droneOsc1 = null;
    this.droneOsc2 = null;
    this.isAudioEnabled = true;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.initialized = true;
      console.log("Cinematic Audio Engine Initialized");
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  startDrone() {
    if (!this.initialized || !this.isAudioEnabled) return;
    this.stopDrone();

    const t = this.ctx.currentTime;
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.001, t);
    this.droneGain.gain.exponentialRampToValueAtTime(0.08, t + 1.5);

    // Deep sub-drone
    this.droneOsc1 = this.ctx.createOscillator();
    this.droneOsc1.type = 'sawtooth';
    this.droneOsc1.frequency.setValueAtTime(55, t); // A1 note

    this.droneOsc2 = this.ctx.createOscillator();
    this.droneOsc2.type = 'sine';
    this.droneOsc2.frequency.setValueAtTime(110, t); // A2

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, t);

    this.droneOsc1.connect(filter);
    this.droneOsc2.connect(filter);
    filter.connect(this.droneGain);
    this.droneGain.connect(this.ctx.destination);

    this.droneOsc1.start(t);
    this.droneOsc2.start(t);
  }

  stopDrone() {
    if (this.droneGain && this.ctx) {
      try {
        const t = this.ctx.currentTime;
        this.droneGain.gain.linearRampToValueAtTime(0.0001, t + 0.5);
        if (this.droneOsc1) { this.droneOsc1.stop(t + 0.6); this.droneOsc1 = null; }
        if (this.droneOsc2) { this.droneOsc2.stop(t + 0.6); this.droneOsc2 = null; }
      } catch (e) {}
    }
  }

  playSfx(type) {
    if (!this.isAudioEnabled) return;
    this.init();
    this.resume();
    const t = this.ctx.currentTime;

    switch (type) {
      case 'whoosh': {
        const bufferSize = this.ctx.sampleRate * 0.4;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(300, t);
        filter.frequency.exponentialRampToValueAtTime(3500, t + 0.2);
        filter.frequency.exponentialRampToValueAtTime(400, t + 0.4);
        filter.Q.value = 3.0;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.2, t + 0.2);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.4);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        noise.start(t);
        break;
      }

      case 'heartbeat': {
        const playThump = (time, freq, vol) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, time);
          osc.frequency.exponentialRampToValueAtTime(38, time + 0.15);

          gain.gain.setValueAtTime(vol, time);
          gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(time);
          osc.stop(time + 0.22);
        };
        playThump(t, 95, 0.45);
        playThump(t + 0.14, 82, 0.35);
        break;
      }

      case 'needle': {
        const freqs = [2400, 3600, 4800];
        freqs.forEach((f, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f + (idx * 20), t);

          gain.gain.setValueAtTime(0.12 / (idx + 1), t);
          gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t);
          osc.stop(t + 0.95);
        });
        break;
      }

      case 'punch': {
        const subOsc = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(160, t);
        subOsc.frequency.exponentialRampToValueAtTime(32, t + 0.45);

        subGain.gain.setValueAtTime(0.85, t);
        subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.65);

        subOsc.connect(subGain);
        subGain.connect(this.ctx.destination);
        subOsc.start(t);
        subOsc.stop(t + 0.7);

        const clickOsc = this.ctx.createOscillator();
        const clickGain = this.ctx.createGain();
        clickOsc.type = 'triangle';
        clickOsc.frequency.setValueAtTime(800, t);
        clickOsc.frequency.exponentialRampToValueAtTime(80, t + 0.08);

        clickGain.gain.setValueAtTime(0.5, t);
        clickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);

        clickOsc.connect(clickGain);
        clickGain.connect(this.ctx.destination);
        clickOsc.start(t);
        clickOsc.stop(t + 0.12);

        const flashEl = document.getElementById('action-flash');
        if (flashEl) {
          flashEl.classList.add('flash-now');
          setTimeout(() => flashEl.classList.remove('flash-now'), 120);
        }
        break;
      }

      case 'romantic': {
        const notes = [220, 277.18, 329.63, 415.30, 493.88];
        notes.forEach((freq, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, t);

          gain.gain.setValueAtTime(0.001, t);
          gain.gain.linearRampToValueAtTime(0.07 / (i * 0.4 + 1), t + 0.6);
          gain.gain.exponentialRampToValueAtTime(0.0001, t + 2.5);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t);
          osc.stop(t + 2.6);
        });
        break;
      }

      case 'cliffhanger': {
        const cluster = [130.81, 138.59, 261.63, 277.18, 523.25, 554.37];
        cluster.forEach(f => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(f, t);

          const filter = this.ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(1200, t);

          gain.gain.setValueAtTime(0.12, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 2.0);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t);
          osc.stop(t + 2.1);
        });
        break;
      }
    }
  }
}

// ==========================================================================
// NARRATION VOICE GENERATOR (SpeechSynthesis API)
// ==========================================================================
class NarrationVoiceEngine {
  constructor() {
    this.enabled = true;
    this.synth = window.speechSynthesis || null;
    this.currentUtterance = null;
  }

  speak(text) {
    if (!this.enabled || !this.synth) return;
    this.stop();
    try {
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 1.08;
      utter.pitch = 1.02;
      this.currentUtterance = utter;
      this.synth.speak(utter);
    } catch (e) {
      console.warn("Speech synthesis error", e);
    }
  }

  stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
  }
}

// ==========================================================================
// SHORT FILM PLAYER APP CONTROLLER
// ==========================================================================
class ShortFilmApp {
  constructor() {
    this.audio = new CinematicAudioEngine();
    this.narrator = new NarrationVoiceEngine();
    this.currentSceneIndex = 0;
    this.currentTime = 0;
    this.totalDuration = 48; // seconds
    this.isPlaying = false;
    this.playbackSpeed = 1.0;
    this.animationTimer = null;
    this.lastFrameTimestamp = null;
    this.directorMode = false;

    // DOM Elements
    this.currentFrameImg = document.getElementById('current-frame');
    this.playBtn = document.getElementById('play-btn');
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');
    this.replayBtn = document.getElementById('replay-btn');
    this.speedBtn = document.getElementById('speed-btn');
    this.scrubProgress = document.getElementById('scrub-progress');
    this.scrubContainer = document.getElementById('scrub-container');
    this.currentTimeEl = document.getElementById('current-time');
    this.totalTimeEl = document.getElementById('total-time');
    this.toggleAudioBtn = document.getElementById('toggle-audio-btn');
    this.audioBtnText = document.getElementById('audio-btn-text');
    this.directorModeBtn = document.getElementById('director-mode-btn');
    this.directorHud = document.getElementById('director-hud');
    this.playOverlayTrigger = document.getElementById('play-overlay-trigger');
    this.viewport = document.getElementById('viewport');
    
    // HUD Elements
    this.hudLens = document.getElementById('hud-lens');
    this.hudCamMove = document.getElementById('hud-cam-move');
    this.hudLighting = document.getElementById('hud-lighting');

    // Subtitle Elements
    this.speakerBadge = document.getElementById('speaker-badge');
    this.subtitleEn = document.getElementById('subtitle-en');
    this.subtitleCn = document.getElementById('subtitle-cn');

    // Tabs & Panels
    this.scenesGrid = document.getElementById('scenes-grid');
    this.promptsList = document.getElementById('prompts-list');
    this.screenplayContent = document.getElementById('screenplay-content');
    this.toast = document.getElementById('toast');
    this.exportPackageBtn = document.getElementById('export-package-btn');
    this.deckModal = document.getElementById('deck-modal');
    this.closeModalBtn = document.getElementById('close-modal-btn');
    this.modalContent = document.getElementById('modal-content');

    this.init();
  }

  init() {
    this.renderStoryboardGrid();
    this.renderPromptsList('all');
    this.renderScreenplay();
    this.renderNarrationTab();
    this.attachEventListeners();
    this.updateSceneView(0, true);
    this.updateTimeDisplay();
  }

  attachEventListeners() {
    // Play/Pause
    this.playBtn.addEventListener('click', () => this.togglePlay());
    this.playOverlayTrigger.addEventListener('click', () => this.togglePlay());
    this.viewport.addEventListener('click', (e) => {
      if (e.target.closest('.subtitles-container') || e.target.closest('.social-side-rail')) return;
      this.togglePlay();
    });

    // Navigation
    this.prevBtn.addEventListener('click', () => this.prevScene());
    this.nextBtn.addEventListener('click', () => this.nextScene());
    this.replayBtn.addEventListener('click', () => this.seekToTime(0));

    // Playback Speed
    this.speedBtn.addEventListener('click', () => {
      const speeds = [1.0, 1.25, 1.5, 2.0];
      const nextIndex = (speeds.indexOf(this.playbackSpeed) + 1) % speeds.length;
      this.playbackSpeed = speeds[nextIndex];
      this.speedBtn.textContent = `${this.playbackSpeed.toFixed(1)}x`;
    });

    // Audio Toggle
    this.toggleAudioBtn.addEventListener('click', () => {
      this.audio.isAudioEnabled = !this.audio.isAudioEnabled;
      this.narrator.enabled = this.audio.isAudioEnabled;
      if (!this.audio.isAudioEnabled) {
        this.audio.stopDrone();
        this.narrator.stop();
        this.audioBtnText.textContent = "Audio: OFF";
        this.toggleAudioBtn.querySelector('.icon').textContent = "🔇";
      } else {
        this.audioBtnText.textContent = "Audio: ON";
        this.toggleAudioBtn.querySelector('.icon').textContent = "🔊";
        if (this.isPlaying) {
          this.audio.startDrone();
          this.narrator.speak(SCENES[this.currentSceneIndex].narration);
        }
      }
    });

    // Director Mode Toggle
    this.directorModeBtn.addEventListener('click', () => {
      this.directorMode = !this.directorMode;
      this.directorHud.classList.toggle('active', this.directorMode);
      this.directorModeBtn.classList.toggle('btn-primary', this.directorMode);
    });

    // Scrubber click/drag
    this.scrubContainer.addEventListener('click', (e) => {
      const rect = this.scrubContainer.getBoundingClientRect();
      const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      this.seekToTime(clickRatio * this.totalDuration);
    });

    // Tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-tab');
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');
      });
    });

    // Prompt model filters
    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const engine = pill.getAttribute('data-engine');
        this.renderPromptsList(engine);
      });
    });

    // Soundboard interactive buttons
    document.querySelectorAll('.sfx-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sfxType = btn.getAttribute('data-sfx');
        this.audio.playSfx(sfxType);
      });
    });

    // Modal
    this.exportPackageBtn.addEventListener('click', () => this.openProductionDeck());
    this.closeModalBtn.addEventListener('click', () => this.closeProductionDeck());
    this.deckModal.addEventListener('click', (e) => {
      if (e.target === this.deckModal) this.closeProductionDeck();
    });

    // Global keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        this.togglePlay();
      } else if (e.code === 'ArrowRight') {
        this.nextScene();
      } else if (e.code === 'ArrowLeft') {
        this.prevScene();
      }
    });
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    this.playBtn.textContent = this.isPlaying ? '⏸' : '▶';
    this.playOverlayTrigger.classList.toggle('show-splash', !this.isPlaying);

    if (this.isPlaying) {
      this.audio.init();
      this.audio.resume();
      this.audio.startDrone();
      this.narrator.speak(SCENES[this.currentSceneIndex].narration);
      this.lastFrameTimestamp = performance.now();
      this.loop(this.lastFrameTimestamp);
    } else {
      this.audio.stopDrone();
      this.narrator.stop();
      if (this.animationTimer) {
        cancelAnimationFrame(this.animationTimer);
        this.animationTimer = null;
      }
    }
  }

  loop(timestamp) {
    if (!this.isPlaying) return;
    const delta = (timestamp - this.lastFrameTimestamp) / 1000;
    this.lastFrameTimestamp = timestamp;

    this.currentTime += delta * this.playbackSpeed;

    if (this.currentTime >= this.totalDuration) {
      this.currentTime = 0;
      this.audio.playSfx('cliffhanger');
    }

    this.checkSceneTransition();
    this.updateTimeDisplay();

    this.animationTimer = requestAnimationFrame((ts) => this.loop(ts));
  }

  checkSceneTransition() {
    const activeIndex = SCENES.findIndex(s => this.currentTime >= s.timeStart && this.currentTime < s.timeEnd);
    if (activeIndex !== -1 && activeIndex !== this.currentSceneIndex) {
      this.updateSceneView(activeIndex);
    }
  }

  updateSceneView(index, force = false) {
    if (this.currentSceneIndex === index && !force) return;
    this.currentSceneIndex = index;
    const scene = SCENES[index];

    // Trigger visual frame change
    this.currentFrameImg.className = '';
    this.currentFrameImg.src = scene.image;
    void this.currentFrameImg.offsetWidth;
    this.currentFrameImg.className = `active-slide ${scene.animClass}`;

    // Update HUD
    this.hudLens.textContent = scene.lens;
    this.hudCamMove.textContent = `CAMERA: ${scene.cameraMove}`;
    this.hudLighting.textContent = `LIGHTING: ${scene.lighting}`;

    // Update Subtitles
    this.speakerBadge.textContent = scene.speaker;
    this.subtitleEn.textContent = scene.subtitleEn;
    this.subtitleCn.textContent = scene.subtitleCn;

    // Update Storyboard card highlight
    document.querySelectorAll('.scene-card').forEach((card, idx) => {
      card.classList.toggle('playing-now', idx === index);
    });

    // Play SFX Cue & Narration
    if (this.isPlaying) {
      if (scene.sfxTrigger) this.audio.playSfx(scene.sfxTrigger);
      this.narrator.speak(scene.narration);
    }
  }

  updateTimeDisplay() {
    const progressPercent = (this.currentTime / this.totalDuration) * 100;
    this.scrubProgress.style.width = `${progressPercent}%`;

    const formatSec = (s) => {
      const mins = Math.floor(s / 60).toString().padStart(2, '0');
      const secs = Math.floor(s % 60).toString().padStart(2, '0');
      return `${mins}:${secs}`;
    };

    this.currentTimeEl.textContent = formatSec(this.currentTime);
    this.totalTimeEl.textContent = formatSec(this.totalDuration);
  }

  seekToTime(seconds) {
    this.currentTime = Math.max(0, Math.min(this.totalDuration, seconds));
    const targetSceneIndex = SCENES.findIndex(s => this.currentTime >= s.timeStart && this.currentTime < s.timeEnd);
    if (targetSceneIndex !== -1) {
      this.updateSceneView(targetSceneIndex, true);
    }
    this.updateTimeDisplay();
  }

  nextScene() {
    const nextIdx = (this.currentSceneIndex + 1) % SCENES.length;
    this.seekToTime(SCENES[nextIdx].timeStart);
  }

  prevScene() {
    const prevIdx = (this.currentSceneIndex - 1 + SCENES.length) % SCENES.length;
    this.seekToTime(SCENES[prevIdx].timeStart);
  }

  showToast(message) {
    this.toast.textContent = message;
    this.toast.classList.add('show');
    setTimeout(() => this.toast.classList.remove('show'), 2500);
  }

  copyToClipboard(text, label = "Prompt") {
    navigator.clipboard.writeText(text).then(() => {
      this.showToast(`${label} copied to clipboard!`);
    }).catch(() => {
      this.showToast(`Failed to copy, please select manually.`);
    });
  }

  // ==========================================================================
  // RENDER STORYBOARD
  // ==========================================================================
  renderStoryboardGrid() {
    this.scenesGrid.innerHTML = SCENES.map((scene, idx) => `
      <div class="scene-card ${idx === 0 ? 'playing-now' : ''}" data-index="${idx}">
        <div class="scene-thumb-wrap">
          <img src="${scene.image}" alt="${scene.title}">
          <span class="scene-badge-time">00:0${scene.timeStart} - 00:${scene.timeEnd < 10 ? '0' + scene.timeEnd : scene.timeEnd}</span>
        </div>
        <div class="scene-card-body">
          <div class="scene-num-title">
            <span>${scene.title}</span>
            <span style="font-size:0.75rem; color:var(--gold-primary);">Act ${idx + 1}</span>
          </div>
          <p class="scene-desc-short">${scene.desc}</p>
          <div class="scene-tags">
            <span class="scene-tag">${scene.lens.split('•')[0].trim()}</span>
            <span class="scene-tag">SFX: ${scene.sfxTrigger}</span>
          </div>
        </div>
      </div>
    `).join('');

    this.scenesGrid.querySelectorAll('.scene-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-index'), 10);
        this.seekToTime(SCENES[idx].timeStart);
        if (!this.isPlaying) this.togglePlay();
      });
    });
  }

  // ==========================================================================
  // RENDER PROMPTS LIST
  // ==========================================================================
  renderPromptsList(filterEngine = 'all') {
    let html = '';
    SCENES.forEach((scene, sIdx) => {
      const engines = ['kling', 'runway', 'luma', 'midjourney'];
      engines.forEach(engine => {
        if (filterEngine !== 'all' && filterEngine !== engine) return;
        const promptText = scene.prompts[engine];
        if (!promptText) return;

        let badgeClass = engine;
        let engineTitle = engine.toUpperCase();
        if (engine === 'kling') engineTitle = 'Kling 1.5 (Image-to-Video)';
        if (engine === 'runway') engineTitle = 'Runway Gen-3 Alpha Turbo';
        if (engine === 'luma') engineTitle = 'Luma Dream Machine';
        if (engine === 'midjourney') engineTitle = 'Midjourney v6.1';

        html += `
          <div class="prompt-card">
            <div class="prompt-card-header">
              <span class="prompt-engine-badge ${badgeClass}">${engineTitle}</span>
              <span style="font-size:0.78rem; color:var(--text-secondary);">Scene ${sIdx + 1}: ${scene.title}</span>
            </div>
            <div class="prompt-box">${promptText}</div>
            <div class="prompt-actions-bar">
              <span>Aspect Ratio: 9:16 | 4K Photorealistic</span>
              <button class="copy-prompt-btn" data-prompt="${encodeURIComponent(promptText)}" data-engine="${engine}">
                📋 Copy ${engineTitle.split(' ')[0]} Prompt
              </button>
            </div>
          </div>
        `;
      });
    });

    this.promptsList.innerHTML = html;
    this.promptsList.querySelectorAll('.copy-prompt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = decodeURIComponent(btn.getAttribute('data-prompt'));
        const eng = btn.getAttribute('data-engine');
        this.copyToClipboard(text, `${eng.toUpperCase()} Prompt`);
      });
    });
  }

  // ==========================================================================
  // RENDER SCREENPLAY
  // ==========================================================================
  renderScreenplay() {
    this.screenplayContent.innerHTML = `
      <div class="retention-box">
        <h3>⚡ Viral Retention Blueprint (Shorts / Reels / TikTok)</h3>
        <p style="font-size:0.8rem; color:var(--text-secondary); line-height:1.4;">
          Engineered for average view duration above 85% featuring <strong>Heiress Susan</strong>, humble hero <strong>Master John</strong>, and the lethal syndicate of <strong>Master Sam</strong>.
        </p>
        <div class="retention-grid">
          <div class="retention-item">
            <h4>00:00 - 00:02 • Glamour & Threat</h4>
            <p>Heiress Susan walks in luxury while Master Sam's poison needle assassin lurks in shadow.</p>
          </div>
          <div class="retention-item">
            <h4>00:06 - 00:15 • Superhuman Intercept & KO</h4>
            <p>Master John stops the needle 2 inches from Susan, followed by a crushing KO strike.</p>
          </div>
          <div class="retention-item">
            <h4>00:21 - 00:36 • Romantic Catch & Revelation</h4>
            <p>Susan caught in John's arms. Master Sam's identity revealed by captured hitman.</p>
          </div>
          <div class="retention-item">
            <h4>00:36 - 00:48 • Black Card Cliffhanger</h4>
            <p>Susan offers $10M Black VIP Card to hire Master John as her Chief Protector.</p>
          </div>
        </div>
      </div>

      ${SCENES.map(s => `
        <div class="script-scene-block">
          <div class="script-heading">INT. LUXURY HOTEL LOBBY - DAY [00:0${s.timeStart} - 00:${s.timeEnd < 10 ? '0' + s.timeEnd : s.timeEnd}]</div>
          <p class="script-action">${s.desc}</p>
          <div style="background:#090d16; border-left:2px solid var(--gold-primary); padding:0.6rem 0.8rem; border-radius:4px; margin:0.6rem 0;">
            <div style="font-size:0.72rem; font-weight:800; color:var(--gold-primary);">🎙️ VOICE-OVER NARRATION:</div>
            <div style="font-size:0.82rem; color:#f1f5f9; line-height:1.4; font-style:italic;">"${s.narration}"</div>
          </div>
          <div class="script-dialogue-block">
            <span class="dialogue-speaker">${s.speaker}</span>
            <p class="dialogue-line">"${s.subtitleEn}"</p>
            <p class="dialogue-cn">${s.subtitleCn}</p>
          </div>
        </div>
      `).join('')}
    `;
  }

  // ==========================================================================
  // RENDER COMPLETE NARRATION TAB
  // ==========================================================================
  renderNarrationTab() {
    const narrationContainer = document.getElementById('narration-content');
    if (!narrationContainer) return;

    narrationContainer.innerHTML = `
      <div class="retention-box" style="margin-bottom:1.5rem;">
        <h3>🎙️ Master Voice-Over Narration Script (48s Short Film)</h3>
        <p style="font-size:0.82rem; color:var(--text-secondary); line-height:1.5;">
          Optimized for TikTok/Shorts high-retention text-to-speech (ElevenLabs / CapCut Adam or Rachel voice). Delivers intense emotional hooks, breathless action payoffs, and viral cliffhanger urgency.
        </p>
        <div style="display:flex; gap:0.5rem; margin-top:0.75rem;">
          <button class="btn btn-primary" id="copy-full-narration-btn">
            📋 Copy Complete Voiceover Script
          </button>
          <button class="btn btn-secondary" id="audition-full-narration-btn">
            🔊 Audition Full Narration (TTS)
          </button>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:1.2rem;">
        ${SCENES.map((s, idx) => `
          <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.75rem; border-bottom:1px solid var(--border-subtle); padding-bottom:0.5rem;">
              <span style="font-weight:700; color:var(--gold-primary);">Act ${idx + 1}: ${s.title}</span>
              <span style="font-family:monospace; font-size:0.75rem; color:var(--text-muted);">00:0${s.timeStart} - 00:${s.timeEnd < 10 ? '0' + s.timeEnd : s.timeEnd}</span>
            </div>
            
            <div style="margin-bottom:0.75rem;">
              <div style="font-size:0.72rem; font-weight:800; color:var(--cyan-accent); margin-bottom:0.25rem;">VOICE-OVER NARRATOR:</div>
              <div style="font-size:0.88rem; color:#fff; line-height:1.5; background:#0b0e17; padding:0.75rem; border-radius:6px; border-left:3px solid var(--cyan-accent);">
                "${s.narration}"
              </div>
            </div>

            <div>
              <div style="font-size:0.72rem; font-weight:800; color:var(--gold-primary); margin-bottom:0.25rem;">SPOKEN DIALOGUE & CUES:</div>
              <div style="font-size:0.82rem; color:var(--text-secondary); line-height:1.4;">
                <strong>${s.dialogue}</strong>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Copy full narration handler
    document.getElementById('copy-full-narration-btn')?.addEventListener('click', () => {
      const fullText = SCENES.map((s, idx) => `[Act ${idx + 1} - ${s.title} (00:0${s.timeStart}-00:${s.timeEnd < 10 ? '0'+s.timeEnd : s.timeEnd})]\nNARRATOR: "${s.narration}"\nDIALOGUE: ${s.dialogue}\n`).join('\n');
      this.copyToClipboard(fullText, "Full Narration Script");
    });

    // Audition full narration handler
    document.getElementById('audition-full-narration-btn')?.addEventListener('click', () => {
      const allNarration = SCENES.map(s => s.narration).join(' ... ');
      this.narrator.speak(allNarration);
      this.showToast("Speaking full narration script...");
    });
  }

  // ==========================================================================
  // PRODUCTION DECK MODAL
  // ==========================================================================
  openProductionDeck() {
    this.modalContent.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:1.2rem;">
        <div style="background:#0b0e17; padding:1.2rem; border-radius:8px; border-left:3px solid var(--gold-primary);">
          <h4 style="color:#fff; margin-bottom:0.4rem;">🎬 Project Master Specs & Character Lineup</h4>
          <p style="font-size:0.82rem; line-height:1.6;">
            <strong>Title:</strong> Poor Guy KOs Poison Needle! Saves Heiress! She Offers All to Hire Him! Shocked!<br>
            <strong>Duration:</strong> 48 Seconds | <strong>Aspect Ratio:</strong> 9:16 Vertical (1080x1920 / 2160x3840 4K)<br>
            <strong>Rescuer / Hero:</strong> <em>Master John</em> (Superhuman reflexes, disguised as poor worker)<br>
            <strong>Billionaire Heiress:</strong> <em>Susan</em> (Heiress of Grand Horizon Conglomerate)<br>
            <strong>Mastermind / Villain:</strong> <em>Master Sam</em> (Syndicate tycoon who dispatched the poison needle assassin)<br>
            <strong>Target Platforms:</strong> YouTube Shorts, TikTok, Instagram Reels, Kuaishou, Douyin
          </p>
        </div>

        <div>
          <h4 style="color:var(--gold-primary); margin-bottom:0.6rem;">Key Visual Assets Generated</h4>
          <ul style="padding-left:1.2rem; font-size:0.82rem; line-height:1.6;">
            <li><strong>Scene 1:</strong> <code>assets/scene1_the_setup.jpg</code> - Heiress Susan walking, Master Sam's assassin stalking</li>
            <li><strong>Scene 2:</strong> <code>assets/scene2_the_attack.jpg</code> - Master John intercepts needle inches from Susan</li>
            <li><strong>Scene 3:</strong> <code>assets/scene3_the_fight_ko.jpg</code> - Master John's crushing KO strike on attacker</li>
            <li><strong>Scene 4:</strong> <code>assets/scene4_saving_heiress.jpg</code> - Master John catching fainting Heiress Susan, eyes locking</li>
            <li><strong>Scene 5:</strong> <code>assets/scene5_the_revelation.jpg</code> - Master Sam's assassin pinned, Master John dusting jacket</li>
            <li><strong>Scene 6:</strong> <code>assets/scene6_shocking_offer.jpg</code> - Heiress Susan offers Black VIP Card to Master John</li>
            <li><strong>Scene 7:</strong> <code>assets/scene7_cliffhanger.jpg</code> - Fateful handshake cliffhanger: "Do we have a deal, Master John?"</li>
          </ul>
        </div>
      </div>
    `;
    this.deckModal.classList.add('show');
  }

  closeProductionDeck() {
    this.deckModal.classList.remove('show');
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.filmApp = new ShortFilmApp();
});
