input.onButtonPressed(Button.A, function () {
    music.play(music.createSoundExpression(
    WaveShape.Triangle,
    1,
    4855,
    64,
    255,
    9999,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Curve
    ), music.PlaybackMode.InBackground)
})
