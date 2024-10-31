#!/usr/bin/env python3
"""LIFO caching module"""

from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """LIFO caching system"""

    def __init__(self):
        """Initialize the cache"""
        super().__init__()
        self.stack = []

    def put(self, key, item):
        """
        Add an item in the cache
        """
        if key is not None and item is not None:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                if key not in self.cache_data:
                    discarded = self.stack.pop()
                    del self.cache_data[discarded]
                    print(f"DISCARD: {discarded}")

            self.cache_data[key] = item
            if key in self.stack:
                self.stack.remove(key)
            self.stack.append(key)

    def get(self, key):
        """
        Get an item by key
        """
        return self.cache_data.get(key)
