---
title:  "Sample Post - Jupyter Notebook embedding"
excerpt: "This post is for test purposes. It presents a sample jupyter notebook to test jupyter embeding in jekyll."
date:   2021-05-10 18:47:00 +0300
author: Konstantinos Psaroulakis
header:
  image: /assets/images/foo-bar-identity.jpg
  teaser: /assets/images/foo-bar-identity-th.jpg
sidebar:
  - title: "title1"
    image: http://placehold.it/350x250
    image_alt: "logo"
    text: "text1"
  - title: "title2"
    text: "test2"
gallery:
  - url: /assets/images/unsplash-gallery-image-1.jpg
    image_path: assets/images/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 1"
  - url: /assets/images/unsplash-gallery-image-2.jpg
    image_path: assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
  - url: /assets/images/unsplash-gallery-image-3.jpg
    image_path: assets/images/unsplash-gallery-image-3-th.jpg
    alt: "placeholder image 3"
---

---
This post is for test purposes. It presents a sample jupyter notebook to test jupyter embeding in jekyll.
The pipeline followed loads a wav file, plots it, calculates its fft transform and plots its FFT magnitude as well.


```python
#import libraries
%matplotlib inline
import soundfile as sf
import librosa
import matplotlib.pyplot as plt
import numpy as np

```


```python
#Load wav
filename = "./chainsaw-01.wav"
Sin, Sr = sf.read(filename)
#convert stereo to mono
Sin = np.mean(Sin, axis=1)
print(f"Signal array: \n{Sin}\n\nSignal Sampling Rate: {Sr}")

plt.plot(Sin)
plt.title("Signal")
plt.show()
```

    Signal array: 
    [ 3.05175781e-05 -1.52587891e-05  0.00000000e+00 ...  3.05175781e-05
     -1.52587891e-05  0.00000000e+00]
    
    Signal Sampling Rate: 48000
    


    
<img src="/assets/images/posts/output_2_2.png">
    



```python
N=1024

fft = librosa.stft(Sin, n_fft=N)
magnitude = np.abs(fft[:N//2])

plt.plot(magnitude)
plt.title("FFT magnitude")

plt.show()
```
    

<img src="/assets/images/posts/output_3_0.png">

