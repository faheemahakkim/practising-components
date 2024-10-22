function Logo(){
    return (
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAk1BMVEX////+/v4jHyAAAAAhHR4kHiD7+/slISL//f4eGhv4+PghHyAaFRf7+fodGRoRCw3q6uoJAADy8vIWERIOBwlfX1/i4uIzLzDOzs5CQEE9Ojt7e3vW1tYKCgrExMSnp6eWlJVMSUpzcHGsqqu6t7h7eXoqJyignp9LSElkYmO9vb3KycmFgYKOi4w+PT3d29xcVlj7rduvAAAJBklEQVR4nO2ba2OiOhCGJyQS7rcgKnW9K1pt9f//ujMJiqBtd7+dYsJuUTQJPHlnkpkgAEAIgNwT+U7+g/pY7uo/+V79r1+vBZqP6nrXr8j92+YttOsQ0jR+a7B9eD+4XQXpNtZqDjqlrtdACHxfuNP47WT/FzvRmN3orie70V1Pdp11N+x6sht/15Pd6K4nu9FdT3aju2E37PqwG3/Xk93orie70V1PdqO7YTfs+rAbf9eT3eiuJ7vRXU92o7thN+z6sOvs7zqz62zzhl1PduPverIb3fVkN7rryW50N+yGXR924+96shvd9WQ3uuvJbnQ37Ib9BdkJ2MT+B38ntk3ul/cS7ERCfcH+pDuxvddjB8/7F/aMePYLsRPV+Hxskwd2qL2gwz6dy2ObvAi7tOJiOIQHm785e5cdhsMES76O7tncp+/1KVq6y6Piif2d+nOv1T29ZcdvHPAqQX16fGK3M3AqcEiXfYZl48prrqiv7Oi4DsxGKbO4u8+e5rh5CKeFOvOdPVy6lsXS0QzkvNBndhvCFWU+Z5zTOXTZbVLsNtmqLJqrlq9rasnNpSsP7NYXPWOX+/Nnzi3OucXyJ3YbkqH7caLTVm/BPFXs3Mo/C0duvWS3PQ/GNKhRmEXPV75bg7YdQrZl+6VAb2jYzyl2lNoiOgbHuZH3il1OaUfq+9YVfpdBd6xDfzjFwTYYpQu4s2c7xq5V3PwIYU91R9Vv6BaPJo/jvJ2VlEWX0YDTNTTsMIn4rY4rle8fO75xCtflDbu77MY2uL/EjFu7y4DlVYt9GVnN5roFeIT0i13uw1Fwp7CiPdxtXtXbUPSE0WA08ONFi30fDZpKXJQhsXvGLrdtzFvs7shu2zy+7tG42ZAO0CYmd/awdO+VOM+30DfdcfB6p1Zni4su+5Fi10TlZofyo8Pf/KEQrFUJp4d36Bk7TmC+22VvIFSDNmyF9IQJZOvAGgwSIgMZ3M0o71SLfK9v7PDxp4tuiW3b37FvpL7uHrz1bsDomwri8Cvskg68/+ejfbm/nV2+JsJ/YGe557RsfkoHahTAGX1DaTVWTdlOmFu8U9P3RQKO3Rt2NN1T3iVH0LxqscOUKndOp3iYJdf2HKge6mHN/FRHtn1hzx68VrIzP4E7e6F8guP0JvO1a1znJPwR3UKHyJz+2DyBKn0kwPlKXG7Xhs6t/J1ZDJPVeoVK5avD4Al9IA2mT7q3g7Ob7r5Pcbjz5CK0zORrTE4XR5Azv9L+lFpPwg+sYG/3x9/RmR9HOsXu/9nX+SrYs7dNqjCjy2lm1w1Ol/mzycuadQrYE/ZF/jW7H9FhNTuu3z4pLVwVxPiiouXb5vheXWhkfSE71kyr3rA78Bmpa/5i84Oc0lS4mL98xJjVcyl8Kiil+ZOrN5tb9oadeDjKf8N+3VDe3VgGdjjaxafl99h1aRr2hR1Ddesv7JjBpfNDIPuAYcRXPg6ND2XlIm9P2OWa21/Y0ZB3ONrxEZo9jy6f7hej3H3L5w3mb2ffir/ZPG5+XE0ia7LDRJa7o5J9D89ZsL1e5e9nvwT/oDtzywWOdgfB5EKuxb9n93lw6Yvuzl6lr1JJ/JOz3VM/SLExXttZ0X4bS68fyL5qFxuwujfqIGBp90T369ILZ24sYktxDR7Jg+XOClYrwcXqRC2uyjSl6gNXxAJHQ4695JZeT3TPRmrkEvHytNiWKXtkR/8Wp0nEeb7GrC1erGPxZPA4D5Tbj9NS5DgRYKqb9YZdxix0Vahys1Fk3QYypiY1Fu/WakqP0egxYv0oDjTqjnU8xhxHbsVWZoR9Ykebpxu54iAztqyMbgOZdHMm0u14FEg50ehlF+TL4jhJI3aLg33OojJzrq3JG3T9YQ9x7qIVhLZkx/TsHN/DdJbTwxQWqYrl5UgvXzG5dTZLelvqwbg/Pjth3ZoDFbXcSV/8HZZRsMSMmyjdsQfeRM0dpGm5KBBnJTCURcl5FdeuEDrgjFeCCibv5PjiBA274yyjaNmb+f0g6LjVEsa4foTpin+Yn+sPVsKnJ7R3sVbsVlwPDdn7akepiPwmhlXXdKTuoXPW38z+8ae8faY+Sag/2a7PYV2SOLCI4zfpyPE6UDOAStDVFO5N56syoklDJa+rTE+9YV+jt7fYiV2o1Qm5NlPHKGOKhvGe8ngtGt2J+gGequOd7RY7oMeve8M+RR1Jt6X72T37/ZRNsMSMusE6l7GLu7uenjxeXn3mM51+j/O72AmhWesMrfMTOfZ5yWlxogWsU7arYpz0MLzJpp53b+yRPaH9WauE4ffsxD5eqt1SJPAh3InMZhijRVlNW409smeHH3B+F7sN6x/YCbxRP+AZZnvB6oLzfHmii925+kn3dW/YCSmSn9izQ+xHSZairaPs9L3KxYS+2z+wFz1ib/8cuMuuTuP5dO/NKNtthSUOUOWte5Ffsdc/Qu4He/PvS3ac388LD+Ob6ICBf5zAicaH6/33r9kJ6Q377dsv2WVsg2mKkwjGL4H6xWH4tk/uNb5ih5dhlzE6LHJrZLnuRD5OATa513htduLg8JW6mNxxOnbINdjTg13euank3Tg/PjTn0Ihd3aj103P3inRgB+BySU9s4XrrXSf2JJJrVrS4tqIXe8AsPxo66pdlmrGHmMHI2+rPz0m9PjuMmMXkwhZ5bP/l2dVqpRUl1wa1YiewTi339jSBbuxJajGe3XWXzw9qwo5GH7OgaHSXDwlqw+6cKZe/rIYb+0wXdscJUfjooB6KxB1+VOnCLu/SZVZENxDKR+DCkCQrXdhl3gpjGtGjtAE0Ame40YW9vgF1jGP6kcnPi2X503rdS7GrPxvOF0qD1WJxoKMEflijfjl2CNHXj4cdpflkbtu2TrqDjfAAWXFOwAk1im3IcxEd2R+7wrDrwE40Zje668ludNeT3eiuJ7vRXU92o7ue7EZ3PdmN7nqyG931ZDe668ludNeT3ehu2HVj19nmDbue7Mbf9WQ3uuvJbnTXk93obtgNuz7sxt/1ZDe668ludNeT3ehu2A27PuzG3/VkN7rryW5015Pd6G7YDbs+7Mbf9WQ3uuvJrrPu/yf7f1XRpeU/NJHOAAAAAElFTkSuQmCC" alt="Logo"></img>
    )
    
}

export default Logo