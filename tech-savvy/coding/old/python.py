def interpolate(color_a, color_b, t):
    # 'color_a' and 'color_b' are RGB tuples
    # 't' is a value between 0.0 and 1.0
    # this is a naive interpolation
    return tuple(int(a + (b - a) * t) for a, b in zip(color_a, color_b))

def main():

    color_a = (201,178,0)
    color_b = (0, 0, 0)

    number_of_steps = 10

    colors = [interpolate(color_a, color_b, t/number_of_steps) for t in range(number_of_steps+1)]
    for color in colors:
        print(color)

    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main())