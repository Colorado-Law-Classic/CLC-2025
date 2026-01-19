# Gemini Veo Video Generation Script

## Hero Background Video for Colorado Law Classic

Use this prompt with Google's Gemini Veo (via Google Workspace/AI Studio) to generate an ambient hero video for the website.

---

## Recommended Prompts

### Option A: Golf Course Morning Ambiance (Recommended)

```
Generate a 10-second looping video of a pristine golf course at golden hour sunrise.

Scene: Wide establishing shot of a manicured golf fairway with morning dew glistening on the grass. Gentle morning mist rises from the green. Mountains visible in the distant background (Denver/Colorado Rockies style).

Camera: Slow, cinematic dolly movement from left to right, very subtle parallax effect.

Lighting: Warm golden hour sunlight casting long shadows. Soft lens flare touches.

Mood: Peaceful, prestigious, inviting. Country club elegance.

Colors: Rich greens, warm golden sunlight, hints of deep blue sky.

No people, no golf carts, no text. Just natural beauty.

Style: Cinematic, 4K quality, film grain optional, shallow depth of field on foreground grass.

Loop: Seamless loop - ending frame should match opening frame for smooth repeat.
```

### Option B: Aerial Drone Shot

```
Generate a 12-second looping aerial drone video of a golf course in morning light.

Scene: Bird's eye view slowly descending over a golf course fairway with trees lining the sides. A lake/water hazard visible in the distance reflecting golden sunlight.

Camera: Slow, steady descent from 200ft to 100ft altitude with slight forward movement.

Setting: Early morning, Colorado landscape with mountains on horizon.

Lighting: Soft golden hour, dramatic shadows from trees.

Colors: Lush greens, golden highlights, blue-tinged shadows.

No people, no equipment. Natural serenity.

Style: Cinematic 4K, smooth motion, professional color grading.

Loop: Cross-fade compatible ending for seamless repeat.
```

### Option C: Flag & Green Focus

```
Generate an 8-second looping video of a golf flag on a putting green.

Scene: Close-up of a golf flag (gold/yellow flag preferred) gently waving in a light breeze. Putting green in focus, fairway blurred in background. Early morning light.

Camera: Static shot with subtle handheld micro-movements for organic feel.

Details: Dew drops on grass, flag fabric texture visible, slight flag movement.

Lighting: Backlit by rising sun creating rim light on flag edges.

Mood: Anticipation, elegance, precision.

Style: Shallow depth of field, bokeh background, cinematic color.

Loop: Flag movement should be seamless for infinite loop.
```

---

## Technical Requirements

| Spec | Requirement |
|------|-------------|
| Resolution | 1920x1080 (1080p) minimum |
| Format | MP4 (H.264 codec) |
| Duration | 8-15 seconds |
| File Size | Under 5MB (compress if needed) |
| Frame Rate | 24fps or 30fps |
| Loop | Seamless or cross-fade compatible |

---

## Post-Processing Notes

After generating the video:

1. **Compress** using HandBrake or similar:
   - Web optimized
   - CRF 23-28 for smaller file size
   - Target: under 5MB

2. **Color grade** (optional):
   - Slightly desaturate for elegant feel
   - Add subtle gold tint to highlights
   - Lift shadows slightly for softer contrast

3. **Test loop**:
   - Preview in browser to ensure seamless loop
   - If not seamless, add 0.5s cross-fade at end

4. **Create fallback image**:
   - Export first frame as JPEG
   - Save as `assets/img/hero-fallback.jpg`
   - Used for mobile/slow connections

---

## File Placement

After generating and processing:

```
assets/
  video/
    hero-bg.mp4      <- Main video file
  img/
    hero-fallback.jpg <- Fallback image (first frame)
```

---

## Alternative: Stock Video Sources

If AI generation doesn't produce satisfactory results, consider:

- [Pexels](https://www.pexels.com/search/videos/golf%20course/) - Free
- [Pixabay](https://pixabay.com/videos/search/golf/) - Free
- [Artgrid](https://artgrid.io/) - Paid, high quality
- [Storyblocks](https://www.storyblocks.com/) - Subscription

Search terms: "golf course aerial", "golf morning", "golf fairway drone", "golf green sunrise"

---

## Implementation

Once you have the video, I can implement:
1. Video element in hero section
2. Overlay for text readability
3. Fallback image for mobile
4. Reduced-motion accessibility support
5. Lazy loading for performance
